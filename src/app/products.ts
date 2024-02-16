import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
@Injectable({
  providedIn: 'root'
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';
  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'GIANNI RIBBON CAGE SATIN PUMPS',
      details: 'High-heeled slingback satin pumps crafted with cage-inspired nastro Gianni bows and Medusa hardware at the front                                                                                                                                                                                    ',
      category: 'heels',
      photo: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwe57cc510/original/90_1013020-1A00619_1PG4V_20_Gianni~Ribbon~Cage~Satin~Pumps-Shoes-Versace-online-store_0_2.jpg?sw=1200&q=85&strip=true',
      price: 400,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: 'MEDUSA 95 SLINGBACK PUMPS',        
      details: 'These high-heel pumps are made from patent leather with a squared toe and a Medusa 95 emblem at the slingback strap.                              ',
      category: 'heels',
      photo: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwbc8e9a17/original/90_1012428-D2VE_1B00V_22_Medusa95MidSlingbackPumps-Shoes-Versace-online-store_0_5.jpg?sw=850&q=85&strip=true',
      price: 500,
      wifi: false,
      laundry: true
    },
    {
      id: 2,
      name: 'MEDUSA 95 METALLIC SANDALS',
      details: 'These stiletto-heeled sandals are crafted from snake-effect embossed leather with a metallic finish and are accented with crystal.',
      category: 'heels',
      photo: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwa907614b/original/90_1013713-1A10001_1X24V_22_Medusa95MetallicSandals-Shoes-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true',
      price: 600,
      wifi: false,
      laundry: false
    },
    {
      id: 3,
      name: 'TRIGRECA SNEAKERS',
      details: 'The Trigreca trainers bring innovation to the brands ever-evolving aesthetic. Three-dimensional Greca executions on the soles offer an impactful landing with the Greca Cushioning System. In a subtle nod to Versaces home city',
      category: 'sneakers',
      photo: `https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw97427b4b/original/90_1004182-D18TCG_D0191_22_Trigreca~Sneakers--Versace-online-store_0_0.jpg?sw=850&q=85&strip=true`,
      price: 700,
      wifi: true,
      laundry: false
    },
    {
      id: 4,
      name: 'MILANO RUNNER SNEAKERS',
      details: 'Low-top trainers with suede and leather trims featuring a Versace Milano Stamp embroidery with Houses establishing year and tonal Barocco jacquard canvas inserts. They are lovely.',
      category: '                              sneakers',
      photo: 'https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw2728e00a/original/90_1014183-1A00389_6K530_22_MilanoRunnerSneakers-Shoes-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true',
      price: 800,
      wifi: true,
      laundry: false
    },
    {
      id: 5,
      name: 'EMBROIDERED GRECA SNEAKERS',
      details: 'The low-top silhouette is characterized by an engraved Greca pattern on vulcanized rubber soles, featuring a lurex Greca embroidery on the uppers. ',
      category: 'platforms',
      photo: `https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwe7ffbe09/original/90_1013568-1A10078_2W110_20_Embroidered~Greca~Sneakers-Sneakers-Versace-online-store_0_0.jpg?sw=850&q=85&strip=true`,
      price: 900,
      wifi: true,
      laundry: true
    },
    {
      id: 6,
      name: 'SMEDUSA 95 SATIN WEDGE SANDALS',
      details: 'These satin sandals feature raffia wedges and thin ankle straps. The high-heeled design is finished with accent crystal-embellished Medusa 95 hardware.',
      category: 'platforms',
      photo: `https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw68a561ff/original/90_1014100-1A00619_1PG4V_22_Medusa95SatinWedgeSandals-Shoes-Versace-online-store_0_2.jpg?sw=850&q=85&strip=true`,
      price: 1000,
      wifi: true,
      laundry: true
    },
    {
      id: 7,
      name: 'AEVITAS SINGLE PLATFORM BOOTS',
      details: 'These ankle boots feature a high-block heel and platform. The pair is crafted from supple leather with Medusa zippers at the sides.',
      category: 'platforms',
      photo: `https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw09cdab4e/original/90_1010174-DVT2P_1B00V_20_AevitasSinglePlatformBoots--Versace-online-store_0_2.jpg?sw=1200&q=85&strip=true`,
      price: 2000,
      wifi: true,
      laundry: true
    },
    {
      id: 8,
      name: 'LYCIA SATIN PLATFORM PUMPS',
      details: 'A pair of stiletto high-heeled pumps featuring a pointed design with platform and an accent Medusa 95 charm at the ankle strap of the right shoe.',
      category: 'CA',
      photo: `https://www.versace.com/dw/image/v2/BGWN_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dwa56d5efe/original/90_1013739-1A00619_1PG4V_20_LyciaSatinPlatformPumps-Shoes-Versace-online-store_0_3.jpg?sw=1200&q=85&strip=true`,
      price: 1000,
      wifi: false,
      laundry: false
    }
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}
