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
      "arn:aws:s3:::${var.bucket_name}/*",
    ]
  }
}

resource "aws_iam_policy" "vanbujm-sas-deploy-bucket-policy" {
  name   = "${var.bucket_name}-bucket-policy"
  path   = "/"
  policy = data.aws_iam_policy_document.vanbujm-sas-deploy-bucket-policy-document.json
}


resource "aws_s3_bucket" "vanbujm-sas-deploy-bucket" {
  bucket = var.bucket_name
  acl = "public-read"
  policy = data.aws_iam_policy_document.vanbujm-sas-deploy-bucket-policy-document.json
}
