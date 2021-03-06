// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
export const awsmobile = {
aws_cognito_identity_pool_id : 'us-east-1:4c753f42-52fc-4827-9aee-032e0dc2f85a',
aws_cognito_region : 'us-east-1',
aws_content_delivery : 'enable',
aws_content_delivery_bucket : 'hostingandstreaming-hosting-mobilehub-1052462061',
aws_content_delivery_bucket_region : 'us-east-1',
aws_content_delivery_cloudfront : 'enable',
aws_content_delivery_cloudfront_domain : 'd2j7ru6fc3zwkh.cloudfront.net',
aws_project_id : '62c776bc-df2a-4b53-a041-0cf3cc25e699',
aws_project_name : 'hosting_and_streaming',
aws_project_region : 'us-east-1',
aws_resource_name_prefix : 'hostingandstreaming-mobilehub-1052462061',
}

var AWS = require('aws-sdk');
AWS.config.region = awsmobile.aws_project_region;
AWS.config.update({customUserAgent: 'MobileHub v0.1'});