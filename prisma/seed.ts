// eslint-disable-next-line import/no-extraneous-dependencies
import { Photon, ItemCreateInput } from '@generated/photon';

const photon = new Photon();

async function main() {
  const items: ItemCreateInput[] = [
    {
      name: 'All terrain vehicle - type 1',
      description: 'The type 1 vehicle has good all-round capability, internal seating for 6 plus 2 external positions.',
      category: 'VEHICLES',
      count: 7
    },
    {
      name: 'All terrain vehicle - type 4',
      description: 'The type 4 vehicle is larger than the type 1, with additional defensive capability, and internal seating for 8 plus 2 external positions.',
      category: 'VEHICLES',
      count: 2
    },
    {
      name: 'Transporter - personnel fixtures',
      description: 'Basic bus-type transporter suitable for carrying 24 personnel plus personal kits.',
      category: 'VEHICLES',
      count: 3
    },
    {
      name: 'Transporter - equipment fixtures',
      description: 'Equipment transporter, maximum capacity 5T.',
      category: 'VEHICLES',
      count: 4
    },
    {
      name: 'Transporter - combination fixtures',
      description: 'Transporter with dual-purpose equipment fittings, suitable for 12 personnel plus a large equipment bay.',
      category: 'VEHICLES',
      count: 1
    },
    {
      name: 'Diesel - 50L can',
      description: '50L can of diesel fuel suitable for all ATVs and transporters.',
      category: 'FUEL',
      consumable: true
    },
    {
      name: 'Rifle - standard issue, fully automatic',
      description: 'Fully-automatic rifle using standard ammunition.',
      category: 'FIREARMS',
      count: 100
    },
    {
      name: 'Rifle - sniper',
      description: 'Bolt-action rifle with enhanced scope; requires standard ammunition.',
      category: 'FIREARMS',
      count: 10
    },
    {
      name: 'Sidearm - semi-automatic pistol, standard issue',
      description: 'Officer\'s sidearm',
      category: 'FIREARMS',
      count: 20
    },
    {
      name: 'Machinegun - heavy duty, .50 calibre, belt-fed',
      description: 'Squad machinegun, belt-fed.',
      category: 'FIREARMS',
      count: 3
    },
    {
      name: 'Ammunition - standard clip',
      description: 'Standard clip of ammunition for rifles and sidearms.',
      category: 'AMMUNITION',
      consumable: true
    },
    {
      name: 'Ammunition - standard clip, 10% tracers (blue)',
      description: 'Standard clip of ammunition for rifles and sidearms, with 1 out of 10 rounds as blue tracers.',
      category: 'AMMUNITION',
      consumable: true
    },
    {
      name: 'Ammunition - .50 calibre belt',
      description: 'Ammunition for belt-fed machineguns, in metal case.',
      category: 'AMMUNITION',
      consumable: true
    },
    {
      name: 'Ammunition - .50 calibre magazine, 10% tracers (red)',
      description: 'Ammunition for belt-fed machineguns, with 1 out of 10 rounds as red tracers, in metal case',
      category: 'AMMUNITION',
      consumable: true
    },
    {
      name: 'Ammunition - .50 calibre magazine, 5% tracers (green)',
      description: 'Ammunition for belt-fed machineguns, with 1 out of 20 rounds as green tracers, in metal case',
      category: 'AMMUNITION',
      consumable: true
    },
    {
      name: 'Body armour - vest',
      description: 'Standard body armour, covers the torso only.  Wash before return.',
      category: 'BODY_ARMOUR',
      count: 20
    },
    {
      name: 'Body armour - suit, light',
      description: 'Full suit of body armour, covers torse, thighs, arms and includes helmet.  Wash before return.',
      category: 'BODY_ARMOUR',
      count: 20
    },
    {
      name: 'Rations - standard, daily per person',
      description: 'One day of standard rations for one person.',
      category: 'RATIONS',
      consumable: true
    },
    {
      name: 'Rations - formula++, daily per person',
      description: 'One day of high-activity rations for one person.',
      category: 'RATIONS',
      consumable: true
    },
    {
      name: 'Survival rations - imperishable, weekly per squad',
      description: 'One week of highly imperishable food for 12 people.',
      category: 'RATIONS',
      consumable: true
    },
    {
      name: 'Communication kit - standard (base + 6 stations)',
      description: 'Standard communication kit with base and 6 receivers.',
      category: 'COMMUNICATIONS',
      count: 4
    },
    {
      name: 'Communication kit - additional station',
      description: 'Additional station for standard communication kit (base supports up to 12 receivers).',
      category: 'COMMUNICATIONS',
      count: 20
    }
  ];

  await Promise.all(
    items.map((item) =>
      photon.items.upsert({
        where: { name: item.name },
        create: {
          ...item
        },
        update: {
          ...item
        }
      })
    )
  );
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await photon.disconnect();
  });
