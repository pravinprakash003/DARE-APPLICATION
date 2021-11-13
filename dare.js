var game = [
    [
        "A",
        'I Miss U Chellam &#128150'
    ],
    [
        "B",
        'Always Pray 4 U &#128522'
    ],
    [
        "C",
        'Folling U &#128541'
    ],
    [
        "D",
        'Hugs With Love &#128512'
    ],
    [
        "E",
        'Big Enemy of U &#128544'
    ],
    [
        "F",
        'Lovely Sister/Brother &#128550'
    ],
    [
        "G",
        'Very Noughty &#128526'
    ],
    [
        "H",
        'Loves But Not Showing &#128521'
    ],
    [
        "I",
        'Close Friend &#128524'
    ],
    [
        "J",
        'Life Long Friend &#128536'
    ],
    [
        "K",
        'Love U &#128536'
    ],
    [
        "L",
        'I Need As Like Partner  &#128107'
    ],
    [
        "M",
        'Best Mother &#128143'
    ],
    [
        "N",
        'Dear Friend &#128535'
    ],
    [
        "O",
        'I Want Kiss U &#128536'
    ],
    [
        "P",
        'Only Love &#128151'
    ],
    [
        "Q",
        'Ignore U &#128527'
    ],
    [
        "R",
        'Really Loves U &#128151'
    ],
    [
        "S",
        'I Love U  &#128536'
    ],
    [
        "T",
        'I Like U &#128149'
    ],
    [
        "U",
        'Always Respect U &#128153'
    ],
    [
        "V",
        'I Want A Lip Kiss &#128139'
    ],
    [
        "W",
        'Want TO Propose U &#128070'
    ], 
    [
        "X",
        'Fuck You &#129296'
    ],
    [
        "Y",
        'Uses U &#128530'
    ],
    [
        "Z",
        'Emotional Abt U! &#128545'
    ]
]


function app() {
    var dare = document.getElementById('dar').value.toLowerCase();
    // console.log(dare);
    game.forEach(function(val){
     var smallletter = val[0].toLowerCase();
        if (smallletter == dare) {
            document.getElementById('type').innerHTML = val[1];
        } 
    });
    
}