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
