
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000;

app.use(cors());

const flowers = {
    unknown: {
        'State Flower': {
            'common name': 'unknown',
            'scientific name': 'unknown',
            'year': 'unknown'
        }
    },
    'alabama': {
        'State Flower': {
            'common name': 'Camellia',
            'scientific name': 'Camellia japonica',
            'year': 1959
        },
        'State WildFlower': {
            'common name': 'Oak-leaf hydrangea',
            'scientific name': 'Hydrangea quercifolia',
            'year': 1999
        }
    },
    'alaska': {
        'State Flower': {
            'common name': 'Forget-me-not',
            'scientific name': 'Myosotis alpestris',
            'year': 1917
        }
    },
    'arizona': {
        'State Flower': {
            'common name': 'Saguaro cactus blossom',
            'scientific name': 'Carnegiea gigantea',
            'year': 1931
        }
    },
    'arkansas': {
        'State Flower': {
            'common name': 'Apple blossom',
            'scientific name': 'Malus',
            'year': 1901
        }
    },
    'california': {
        'State Flower': {
            'common name': 'California poppy',
            'scientific name': 'Eschscholzia californica',
            'year': 1903
        }
    },
    'colorado': {
        'State Flower': {
            'common name': 'Rocky Mountain columbine',
            'scientific name': 'Aquilegia coerulea',
            'year': 1899
        }
    },
    'connecticut': {
        'State Flower': {
            'common name': 'Mountain laurel',
            'scientific name': 'Kalmia latifolia',
            'year': 1907
        },
        'children\'s state flower': {
            'common name': 'Michaela Petit\'s Four-O’Clocks',
            'scientific name': 'Mirabilis jalapa',
            'year': 2015
        }
    },
    'delaware': {
        'State Flower': {
            'common name': 'Peach blossom',
            'scientific name': 'Prunus persica',
            'year': 1953
        }
    },
    'district of columbia': {
        'State Flower': {
            'common name': 'American Beauty Rose',
            'scientific name': 'Rosa',
            'year': 1925
        }
    },
    'florida': {
        'State Flower': {
            'common name': 'Orange blossom',
            'scientific name': 'Citrus sinensis',
            'year': 1909
        },
        'State WildFlower': {
            'common name': 'Tickeed',
            'scientific name': 'Coreopsis spp.',
            'year': 1991
        }
    },
    'georgia': {
        'State Flower': {
            'common name': 'Cherokee rose',
            'scientific name': 'Rosa laevigata',
            'year': 1916
        },
        'State WildFlower': {
            'common name': 'Azalea',
            'scientific name': 'Rhododendron',
            'year': 1979
        }
    },
    'hawaii': {
        'State Flower': {
            'common name': 'Hawaiian hibiscus (maʻo hau hele)',
            'scientific name': 'Hibiscus brackenridgei',
            'year': 1988
        }
    },
    'idaho': {
        'State Flower': {
            'common name': 'Syringa, mock orange',
            'scientific name': 'Philadelphus lewisii',
            'year': 1931
        }
    },
    'illinois': {
        'State Flower': {
            'common name': 'Violet',
            'scientific name': 'Viola',
            'year': 1907
        },
        'State WildFlower': {
            'common name': 'Milkweed',
            'scientific name': 'Asclepias spp.',
            'year': 2017
        }
    },
    'indiana': {
        'State Flower': {
            'common name': 'Peony',
            'scientific name': 'Paeonia',
            'year': 1957
        }
    },
    'iowa': {
        'State Flower': {
            'common name': 'Wild rose',
            'scientific name': 'Rosa arkansana',
            'year': 1897
        }
    },
    'kansas': {
        'State Flower': {
            'common name': 'Sunflower',
            'scientific name': 'Helianthus annuus',
            'year': 1903
        }
    },
    'kentucky': {
        'State Flower': {
            'common name': 'Goldenrod',
            'scientific name': 'Solidago gigantea',
            'year': 1926
        }
    },
    'louisiana': {
        'State Flower': {
            'common name': 'Magnolia',
            'scientific name': 'Magnolia',
            'year': 1900
        },
        'State WildFlower': {
            'common name': 'Louisiana iris',
            'scientific name': 'Iris giganticaerulea',
            'year': 1990
        }
    },
    'maine': {
        'State Flower': {
            'common name': 'White pine cone and tassel',
            'scientific name': 'Pinus strobus',
            'year': 1895
        }
    },
    'maryland': {
        'State Flower': {
            'common name': 'Black-eyed susan',
            'scientific name': 'Rudbeckia hirta',
            'year': 1918
        }
    },
    'massachusetts': {
        'State Flower': {
            'common name': 'Mayflower',
            'scientific name': 'Epigaea repens',
            'year': 1918
        }
    },
    'michigan': {
        'State Flower': {
            'common name': 'Apple blossom',
            'scientific name': 'Malus',
            'year': 1897
        },
        'State WildFlower': {
            'common name': 'Dwarf lake iris',
            'scientific name': 'Iris lacustris',
            'year': 1998
        }
    },
    'minnesota': {
        'State Flower': {
            'common name': 'Pink and white lady\'s slipper',
            'scientific name': 'Cypripedium reginae',
            'year': 1902
        }
    },
    'mississippi': {
        'State Flower': {
            'common name': 'Magnolia',
            'scientific name': 'Magnolia',
            'year': 1900
        },
        'State WildFlower': {
            'common name': 'Tickseed',
            'scientific name': 'Coreopsis',
            'year': 1991
        }
    },
    'missouri': {
        'State Flower': {
            'common name': 'Hawthorn',
            'scientific name': 'Crataegus',
            'year': 1923
        }
    },
    'montana': {
        'State Flower': {
            'common name': 'Bitterroot',
            'scientific name': 'Lewisia rediviva',
            'year': 1894
        }
    },
    'nebraska': {
        'State Flower': {
            'common name': 'Goldenrod',
            'scientific name': 'Solidago gigantea',
            'year': 1895
        }
    },
    'nevada': {
        'State Flower': {
            'common name': 'Sagebrush',
            'scientific name': 'Artemisia tridentata',
            'year': 1967
        }
    },
    'new hampshire': {
        'State Flower': {
            'common name': 'Purple lilac',
            'scientific name': 'Syringa vulgaris',
            'year': 1919
        },
        'State WildFlower': {
            'common name': 'Pink lady\'s slipper',
            'scientific name': 'Cypripedium acaule',
            'year': 1991
        }
    },
    'new jersey': {
        'State Flower': {
            'common name': 'Violet',
            'scientific name': 'Viola sororia',
            'year': 1971
        }
    },
    'new mexico': {
        'State Flower': {
            'common name': 'Yucca flower',
            'scientific name': 'Yucca',
            'year': 1927
        }
    },
    'new york': {
        'State Flower': {
            'common name': 'Rose',
            'scientific name': 'Rosa',
            'year': 1955
        }
    },
    'north carolina': {
        'State Flower': {
            'common name': 'Flowering dogwood',
            'scientific name': 'Cornus florida',
            'year': 1941
        },
        'State WildFlower': {
            'common name': 'Carolina lily',
            'scientific name': 'Lilium michauxii',
            'year': 2003
        }
    },
    'north dakota': {
        'State Flower': {
            'common name': 'Wild prairie rose',
            'scientific name': 'Rosa blanda or arkansana',
            'year': 1907
        }
    },
    'ohio': {
        'State Flower': {
            'common name': 'Scarlet carnation',
            'scientific name': 'Dianthus caryophyllus',
            'year': 1953
        },
        'State WildFlower': {
            'common name': 'Large white trillium',
            'scientific name': 'Trillium grandiflorum',
            'year': 1987
        }
    },
    'oklahoma': {
        'State Flower': {
            'common name': 'Oklahoma rose',
            'scientific name': 'Rosa',
            'year': 2004
        },
        'State WildFlower': {
            'common name': 'Indian blanket',
            'scientific name': 'Gaillardia pulchella',
            'year': 1986
        },
        'State Floral Emblem': {
            'common name': 'Mistletoe',
            'scientific name': 'Phoradendron leucarpum',
            'year': 1893
        }
    },
    'oregon': {
        'State Flower': {
            'common name': 'Oregon grape',
            'scientific name': 'Mahonia aquifolium',
            'year': 1899
        }
    },
    'pennsylvania': {
        'State Flower': {
            'common name': 'Mountain laurel',
            'scientific name': 'Kalmia latifolia',
            'year': 1933
        },
        'beautification and conservation plant': {
            'common name': 'Penngift crown vetch',
            'scientific name': 'Coronilla varia',
            'year': 1982
        }
    },
    'rhode island': {
        'State Flower': {
            'common name': 'Violet',
            'scientific name': 'Viola',
            'year': 1968
        },
    },
    'south carolina': {
        'State Flower': {
            'common name': 'Yellow jessamine',
            'scientific name': 'Gelsemium sempervirens',
            'year': 1924
        },
        'State WildFlower': {
            'common name': 'Goldenrod',
            'scientific name': 'Solidago altissima',
            'year': 2003
        }
    },
    'south dakota': {
        'State Flower': {
            'common name': 'Pasque flower',
            'scientific name': 'Pulsatilla hirsutissima',
            'year': 1903
        },
    },
    'south carolina': {
        'State Flower': {
            'common name': 'Iris',
            'scientific name': 'Iris',
            'year': 1933
        },
        'State WildFlower': {
            'common name': 'Purple passionflower',
            'scientific name': 'Passiflora incarnata',
            'year': 1919
        },
        'State WildFlower 2': {
            'common name': 'Tennessee purple coneflower',
            'scientific name': 'Echinacea tennesseensis',
            'year': 2012
        }
    },
    'texas': {
        'State Flower': {
            'common name': 'Bluebonnet sp.',
            'scientific name': 'Lupinus sp.',
            'year': 1901
        },
    },
    'utah': {
        'State Flower': {
            'common name': 'Sego lily',
            'scientific name': 'Calochortus nuttallii',
            'year': 1911
        },
    },
    'vermont': {
        'State Flower': {
            'common name': 'Red clover',
            'scientific name': 'Trifolium pratense',
            'year': 1894
        },
    },
    'virginia': {
        'State Flower': {
            'common name': 'American dogwood',
            'scientific name': 'Cornus florida',
            'year': 1918
        },
    },
    'washington': {
        'State Flower': {
            'common name': 'Coast rhododendron',
            'scientific name': 'Rhododendron macrophyllum',
            'year': 1892
        },
    },
    'west virginia': {
        'State Flower': {
            'common name': 'Rhododendron',
            'scientific name': 'Rhododendron maximum',
            'year': 1903
        },
    },
    'wisconsin': {
        'State Flower': {
            'common name': 'Wood violet',
            'scientific name': 'Viola papilionacea',
            'year': 1909
        },
    },
    'wyoming': {
        'State Flower': {
            'common name': 'Indian paintbrush',
            'scientific name': 'Castilleja linariifolia',
            'year': 1917
        },
    },
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const stateName = request.params.name.toLowerCase();
    if (flowers[stateName]){
        response.json(flowers[stateName]);
    } else{
        response.json(rappers.unknown)
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})