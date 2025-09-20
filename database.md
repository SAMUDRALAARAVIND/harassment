# Locations Schema (MongoDB)

This schema represents the hierarchical geographic structure of **States → Districts → Mandals → Villages**.  
Each entity has its own **unique string `_id`** (not ObjectId) to make referencing and lookups easier.

---

## 1. Collection: `geo_locations`

Each document represents **one state** with its nested districts, mandals, and villages.

### Document Structure

```json
{
  "id": "state_tel_01",
  "stateName": "Telangana",
  "districts": [
    {
      "id": "dist_tel_wgl_01",
      "districtName": "Warangal",
      "mandals": [
        {
          "id": "mand_tel_wgl_hnk_01",
          "mandalName": "Hanamkonda",
          "villages": [
            {
              "id": "vill_tel_wgl_hnk_kaz_01",
              "villageName": "Kazipet"
            },
            {
              "id": "vill_tel_wgl_hnk_bvn_01",
              "villageName": "Bhavaninagar"
            }
          ]
        }
      ]
    }
  ]
}
```

A sample address data we have is :

```json
{
  "stateCode": "28",
  "stateName": "ANDHRA PRADESH",
  "districtCode": "532",
  "districtName": "Adilabad",
  "mandalCode": "04305",
  "mandalName": "Tamsi",
  "villageCode": "000000",
  "villageName": "Tamsi"
}
```

# Citizens & Admins Collections (MongoDB)

These collections store the user accounts of different roles like citizens/party workers & admin users.

---

## 2.Collection: `citizens`

Each document represents a **citizen / party worker** who can raise complaints.

### Document Structure

```json
{
  "_id": "user_identifier",
  "full_name": "Rajesh",
  "address": "28-532-04305-568945", // "statecode-districtcode-mandalcode-villagecode"
  "mobileNumber": "*********",
  "otp": "482193",
  "otp_expiry_timestamp": "epoch_in_seconds",
  "createdAt": "epoch_in_seconds",
  "updatedAt": "epoch_in_seconds"
}
```

## 3. Collection: `admins`

Each document in this collection represents an admin user of the application.

### Document structure

```json
{
  "_id": "admin_identifier",
  "full_name": "Aravind",
  "email": "aravind@gmail.com",
  "password": "not_a_hashed_password"
}
```

# Complaints Collection (MongoDB)

This collection stores all complaints submitted by **citizens or party workers**.  
Each complaint includes metadata, priority, description, location codes, and optional attachments.

---

## 4. Collection: `complaints`

Each document represents **one complaint**.

### Document Structure

```json
{
  "_id": "complaint_identifier",
  "citizenId": "citizen_identifier",
  "isAnonymous": false, // Use this field while showing up the complaints to the admin people.
  "issueType": "RIVAL_PARTY_WORKER",
  // Enum: POLICE | GOVERNMENT_OFFICIAL | RIVAL_PARTY_WORKER | LAND_PROPERTY_DISPUTE | FALSE_CASE | EXTORTION | OTHER
  "otherTypeText": "Harassment during rally", // filled if type = OTHER
  "priority": "P1", // Enum: P0 | P1 | P2 | P3
  "description": "They threatened me at the polling booth.",
  "attachments": ["https://bucket.s3/file1.jpg", "https://bucket.s3/file2.jpg"],
  "status": "SUBMITTED", // Enum: SUBMITTED | IN_REVIEW | VERIFIED | REJECTED
  "createdAt": "2025-09-12T09:00:00.000Z",
  "updatedAt": "2025-09-12T09:00:00.000Z"
}
```

## 5.Collection `assets`

Each document represents the detailed information of uploaded asset (images for now)

```json
{
  "user_id": "", // Id of the user who uploaded the asset.
  "asset_id": "2bed297e1c1e5d0a1f00108b5453f57b",
  "public_id": "givsea1ujnuixu74g1u1",
  "version": 1758313532,
  "version_id": "880ce45f5c19fc88f69783c79a1f9dd4",
  "signature": "2766a870f28cd1f4f4040baa3965a03de9ccd3f2",
  "width": 1280,
  "height": 720,
  "format": "png",
  "resource_type": "image",
  "created_at": "2025-09-19T20:25:32Z",
  "tags": [],
  "bytes": 535388,
  "type": "upload",
  "etag": "08131074d7c4eaef63c075e3659ba7f6",
  "placeholder": false,
  "url": "http://res.cloudinary.com/dzqyup4eh/image/upload/v1758313532/givsea1ujnuixu74g1u1.png",
  "secure_url": "https://res.cloudinary.com/dzqyup4eh/image/upload/v1758313532/givsea1ujnuixu74g1u1.png",
  "asset_folder": "",
  "display_name": "givsea1ujnuixu74g1u1",
  "original_filename": "53abc377ad07f35b7338c66d8a80941a",
  "api_key": "584998976421736"
}
```
