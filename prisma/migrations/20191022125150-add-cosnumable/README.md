# Migration `20191022125150-add-cosnumable`

This migration has been generated by Jonathan Van Buren at 10/22/2019, 12:51:50 PM.
You can check out the [state of the datamodel](./datamodel.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "sas"."Item" ADD COLUMN "consumable" boolean NOT NULL DEFAULT false ;
```

## Changes

```diff
diff --git datamodel.mdl datamodel.mdl
migration 20191022124930-items..20191022125150-add-cosnumable
--- datamodel.dml
+++ datamodel.dml
@@ -22,5 +22,6 @@
   name String @unique
   description String
   category Category
   count Int
+  consumable Boolean @default(false)
 }
```

## Photon Usage

You can use a specific Photon built for this migration (20191022125150-add-cosnumable)
in your `before` or `after` migration script like this:

```ts
import Photon from '@generated/photon/20191022125150-add-cosnumable'

const photon = new Photon()

async function main() {
  const result = await photon.users()
  console.dir(result, { depth: null })
}

main()

```