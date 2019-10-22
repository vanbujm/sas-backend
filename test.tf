provider "aws" {
  profile = "default"
  region = var.region
}

data "aws_iam_policy_document" "vanbujm-sas-deploy-bucket-policy-document" {
  statement {
    sid = "1"

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "arn:aws:s3:::vanbujm-sas-deploy-bucket/*",
    ]
    principals {
      type = "*"
      identifiers = ["*"]
    }
  }
}

resource "aws_s3_bucket" "vanbujm-sas-deploy-bucket" {
  bucket = var.bucket_name
  acl = "public-read"
  policy = data.aws_iam_policy_document.vanbujm-sas-deploy-bucket-policy-document.json
}

resource "aws_s3_bucket_policy" "vanbujm-sas-deploy-bucket-policy" {
  depends_on = [aws_s3_bucket.vanbujm-sas-deploy-bucket]
  bucket = var.bucket_name
  policy = data.aws_iam_policy_document.vanbujm-sas-deploy-bucket-policy-document.json
}

resource "aws_lambda_function" "sas-deploy" {
  function_name = "sas-deploy"

  # The bucket name as created earlier with "aws s3api create-bucket"
  s3_bucket = "vanbujm-sas-deploy-bucket"
  s3_key    = "index.js.zip"

  # "main" is the filename within the zip file (main.js) and "handler"
  # is the name of the property under which the handler function was
  # exported in that file.
  handler = "index.handler"
  runtime = "nodejs10.x"

  role = aws_iam_role.lambda_exec.arn
}

# IAM role which dictates what other AWS services the Lambda function
# may access.
resource "aws_iam_role" "lambda_exec" {
  name = "vanbujm-sas-lambda-exec-role"

  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Action": "sts:AssumeRole",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Effect": "Allow",
      "Sid": ""
    }
  ]
}
EOF
}