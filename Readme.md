
# ipm package: aws-s3-access-control

## Overview

Provide role-based authorization for AWSS3. This package helps user to get contents of a file on s3 using the filename. It assumes the user enters the corresponding {fileName, url} tuple in the collection.

This is an ipm package, which contains one or more reusable assets within the ipm Community. The 'package.json' in this repo is a ipm spec's package.json, [here](https://docs.clearblade.com/v/3/6-ipm/spec), which is a superset of npm's package.json spec, [here](https://docs.npmjs.com/files/package.json).

[Browse ipm Packages](https://ipm.clearblade.com)

## Setup

### - Out of the Box

This package contains an example S3 Object to fetch, and can be run upon a fresh install. Run `AWSS3ExampleFetchAsset`

### - Integration with Developer's S3 Buckets

1. Create account: https://aws.amazon.com/documentation/s3/
2. Upload objects to provide access control upon
3. Place URLs in `aws_s3_resources` collection
4. Can fetch file contents via the `FetchS3Object` code service

## Usage
The AWSS3Lib provides user with a method to get contents of file using the filename. It does so under the assumption that the file name exists in the collection with a valid Url.

To test call `AWSS3ExampleFetchAsset` with relevant parameters as an Authenticated User.


## Assets

### Code Services

* `AWSS3ExampleFetchAsset` - Fetch the contents of an access-controlled AWSS3 Resource. ___Note___: Make sure to initialize ClearBlade Object, before calling the Library methods. i.e. `ClearBlade.init({request:req});`

### Code Libraries

* `AWSS3Lib` - This library provides a method to get file contents from AWSS3 using a filename. It internally uses a collection to get s3 url for corresponding filename. 
***Note***: User needs to add a new file, url entry in the collections before trying to access it.

### Collections

* `s3_resources` - Stores key/value pairs of filenames and their respective URLs in AWSS3

## API

## Functions

<dl>
<dt><a href="#AWSS3ExampleFetchAsset">AWSS3ExampleFetchAsset(fileName)</a> ⇒ <code>string</code></dt>
<dd><p>Fetch the contents of an access-controlled AWSS3 Resource</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#AWSS3">AWSS3</a> : <code>Object</code></dt>
<dd><p>AWS S3 is a file Manager Service Software</p>
</dd>
<dt><a href="#callback">callback</a> : <code>function</code></dt>
<dd><p>This callback is displayed as part of sgEmail.</p>
</dd>
</dl>

<a name="AWSS3ExampleFetchAsset"></a>

## AWSS3ExampleFetchAsset(fileName) ⇒ <code>string</code>
Fetch the contents of an access-controlled AWSS3 Resource

**Kind**: global function  
**Returns**: <code>string</code> - content - contents of AWSS3 hosted file  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | filename associated with a row in s3_resources collection |

<a name="AWSS3"></a>

## AWSS3 : <code>Object</code>
AWS S3 is a file Manager Service Software

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| collectionName | <code>string</code> | 

**Example**  
```js
var s3 = AWSS3(collectionName);
```
<a name="AWSS3.GetFile"></a>

### AWSS3.GetFile : <code>Object</code>
**Kind**: static typedef of [<code>AWSS3</code>](#AWSS3)  

| Param | Type |
| --- | --- |
| fileName | <code>string</code> | 
| callback | [<code>callback</code>](#callback) | 

**Example**  
```js
var s3 = AWSS3(collectionName);
ClearBlade.init({request:req}); // Where request has systemKey and systemSecret information
s3.GetFile(fileName, function(err, resp){
    if(err ){
      resp.error("Failed to GET File from AWSS3: " + JSON.stringify(err));
    }
    resp.success(data);          
}
```
<a name="callback"></a>

## callback : <code>function</code>
This callback is displayed as part of sgEmail.

**Kind**: global typedef  

| Param | Type |
| --- | --- |
| err | <code>Object</code> | 
| resp | <code>Object</code> | 

