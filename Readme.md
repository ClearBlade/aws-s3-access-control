
# ipm package: aws-s3-access-control

## Overview

Provide role-based authorization for AWS S3 Buckets and Object

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

### - Out of the Box

This package contains an example S3 Object to fetch, and can be run upon a fresh install. Run `FetchS3Object`

### - Integration with Developer's S3 Buckets

1. Create account: https://aws.amazon.com/documentation/s3/
2. Upload objects to provide access control upon
3. Place URLs in `aws_s3_resources` collection
4. Can fetch file contents via the `FetchS3Object` code service

## API

<a name="FetchS3Object"></a>

#### FetchS3Object(filename) ⇒ <code>string</code>
Fetch the contents of an access-controlled AWS S3 Resource

**Kind**: global function
**Returns**: <code>string</code> - content - contents of AWS S3 hosted file

  
| Param | Type | Description |  
|:---:|:---:|:---:|  
| filename | <code>string</code> | filename associated with a row in aws_s3_resources collection |  


## Usage

Call `FetchS3Object` as an Authenticated User

### Code Services

`FetchS3Object` - Fetch the contents of an access-controlled AWS S3 Resource

### Collections

`aws_s3_resources` - Stores key/value pairs of filenames and their respective URLs in AWS S3
### ...

## Thank you

Powered by ClearBlade Enterprise IoT Platform: [https://platform.clearblade.com](https://platform.clearblade.com)
