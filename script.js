/* =========================================================
   YmcGame
   Game Hub
========================================================= */


/* =========================================================
   GAME DATABASE
========================================================= */

const games = [

    /* ================= RACING ================= */

    {
        id: "drift-hunters",
        name: "Drift Hunters",
        icon: "🏎️",
        category: "Racing",
        description: "Drift, tune and customize cars.",
        url: "https://www.crazygames.com/game/drift-hunters"
    },

    {
        id: "drift-boss",
        name: "Drift Boss",
        icon: "🚘",
        category: "Racing",
        description: "One-button drifting challenge.",
        url: "https://www.crazygames.com/game/drift-boss"
    },

    {
        id: "moto-x3m",
        name: "Moto X3M",
        icon: "🏍️",
        category: "Racing",
        description: "Fast motorcycle obstacle racing.",
        url: "https://www.crazygames.com/game/moto-x3m"
    },

    {
        id: "moto-x3m-winter",
        name: "Moto X3M Winter",
        icon: "❄️",
        category: "Racing",
        description: "Snowy motorcycle stunt racing.",
        url: "https://www.crazygames.com/game/moto-x3m-winter"
    },

    {
        id: "moto-x3m-pool-party",
        name: "Moto X3M Pool Party",
        icon: "🏖️",
        category: "Racing",
        description: "Beach, ramps and crazy stunts.",
        url: "https://www.crazygames.com/game/moto-x3m-pool-party"
    },

    {
        id: "moto-x3m-spooky-land",
        name: "Moto X3M Spooky Land",
        icon: "🎃",
        category: "Racing",
        description: "Halloween motorcycle racing.",
        url: "https://www.crazygames.com/game/moto-x3m-spooky-land"
    },

    {
        id: "city-car-driving",
        name: "City Car Driving",
        icon: "🚗",
        category: "Racing",
        description: "Drive around a detailed city.",
        url: "https://www.crazygames.com/game/city-car-driving"
    },

    {
        id: "real-cars-in-city",
        name: "Real Cars in City",
        icon: "🌆",
        category: "Racing",
        description: "Free-roam city driving.",
        url: "https://www.crazygames.com/game/real-cars-in-city"
    },

    {
        id: "super-star-car",
        name: "Super Star Car",
        icon: "🏁",
        category: "Racing",
        description: "Race through colorful tracks.",
        url: "https://www.crazygames.com/game/super-star-car"
    },

    {
        id: "highway-traffic",
        name: "Highway Traffic",
        icon: "🛣️",
        category: "Racing",
        description: "Avoid traffic at high speed.",
        url: "https://www.crazygames.com/game/highway-traffic"
    },

    {
        id: "crazy-for-speed",
        name: "Crazy for Speed",
        icon: "🏎️",
        category: "Racing",
        description: "Race, drift and perform stunts.",
        url: "https://www.crazygames.com/game/crazy-for-speed"
    },

    {
        id: "polytrack",
        name: "PolyTrack",
        icon: "🟧",
        category: "Racing",
        description: "Low-poly racing with huge tracks.",
        url: "https://www.crazygames.com/game/polytrack"
    },

    {
        id: "racing-limits",
        name: "Racing Limits",
        icon: "🚘",
        category: "Racing",
        description: "High-speed highway racing.",
        url: "https://www.crazygames.com/game/racing-limits"
    },

    {
        id: "night-city-racing",
        name: "Night City Racing",
        icon: "🌃",
        category: "Racing",
        description: "Race through a neon city.",
        url: "https://www.crazygames.com/game/night-city-racing"
    },

    {
        id: "rally-racer-dirt",
        name: "Rally Racer Dirt",
        icon: "🏜️",
        category: "Racing",
        description: "Race and drift across dirt roads.",
        url: "https://www.crazygames.com/game/rally-racer-dirt"
    },

    {
        id: "sky-riders",
        name: "Sky Riders",
        icon: "🏎️",
        category: "Racing",
        description: "Race across huge stunt tracks.",
        url: "https://www.crazygames.com/game/sky-riders"
    },

    {
        id: "smash-karts",
        name: "Smash Karts",
        icon: "🏎️",
        category: "Racing",
        description: "Fast chaotic kart racing.",
        url: "https://www.crazygames.com/game/smash-karts"
    },

    {
        id: "boom-karts",
        name: "Boom Karts",
        icon: "🏎️",
        category: "Racing",
        description: "Arcade kart racing action.",
        url: "https://www.crazygames.com/game/boom-karts"
    },

    {
        id: "monster-truck-destroyer",
        name: "Monster Truck Destroyer",
        icon: "🚛",
        category: "Racing",
        description: "Drive monster trucks through obstacles.",
        url: "https://www.crazygames.com/game/monster-truck-destroyer"
    },

    {
        id: "madalin-stunt-cars-2",
        name: "Madalin Stunt Cars 2",
        icon: "🏎️",
        category: "Racing",
        description: "Open-world stunt driving.",
        url: "https://www.crazygames.com/game/madalin-stunt-cars-2"
    },

    {
        id: "derby-crash",
        name: "Derby Crash",
        icon: "🚙",
        category: "Racing",
        description: "Drive and survive chaotic arenas.",
        url: "https://www.crazygames.com/game/derby-crash"
    },

    {
        id: "derby-crash-2",
        name: "Derby Crash 2",
        icon: "🚗",
        category: "Racing",
        description: "More chaotic driving arenas.",
        url: "https://www.crazygames.com/game/derby-crash-2"
    },

    {
        id: "4x4-offroader",
        name: "4x4 Offroader",
        icon: "🚙",
        category: "Racing",
        description: "Explore rough off-road terrain.",
        url: "https://www.crazygames.com/game/4x4-offroader"
    },

    {
        id: "vehicle-masters",
        name: "Vehicle Masters",
        icon: "🚛",
        category: "Racing",
        description: "Drive different vehicles through challenges.",
        url: "https://www.crazygames.com/game/vehicle-masters"
    },


    /* ================= ARCADE ================= */

    {
        id: "slope",
        name: "Slope",
        icon: "🔴",
        category: "Arcade",
        description: "Roll as far as possible.",
        url: "https://www.crazygames.com/game/slope"
    },

    {
        id: "slope-2",
        name: "Slope 2",
        icon: "🟠",
        category: "Arcade",
        description: "A faster slope challenge.",
        url: "https://www.crazygames.com/game/slope-2"
    },

    {
        id: "stickman-hook",
        name: "Stickman Hook",
        icon: "🕷️",
        category: "Arcade",
        description: "Swing through challenging levels.",
        url: "https://www.crazygames.com/game/stickman-hook"
    },

    {
        id: "helix-jump",
        name: "Helix Jump",
        icon: "🌀",
        category: "Arcade",
        description: "Bounce through the helix tower.",
        url: "https://www.crazygames.com/game/helix-jump"
    },

    {
        id: "flappy-bird",
        name: "Flappy Bird",
        icon: "🐦",
        category: "Arcade",
        description: "Classic tap-to-fly challenge.",
        url: "https://www.crazygames.com/game/flappy-bird"
    },

    {
        id: "crossy-road",
        name: "Crossy Road",
        icon: "🐔",
        category: "Arcade",
        description: "Cross roads and rivers.",
        url: "https://www.crazygames.com/game/crossy-road"
    },

    {
        id: "color-road",
        name: "Color Road",
        icon: "🟣",
        category: "Arcade",
        description: "Match the rolling ball to colors.",
        url: "https://www.crazygames.com/game/color-road"
    },

    {
        id: "color-tunnel",
        name: "Color Tunnel",
        icon: "🌈",
        category: "Arcade",
        description: "Dodge obstacles in a tunnel.",
        url: "https://www.crazygames.com/game/color-tunnel"
    },

    {
        id: "house-of-hazards",
        name: "House of Hazards",
        icon: "🏠",
        category: "Arcade",
        description: "Chaotic obstacle fun.",
        url: "https://www.crazygames.com/game/house-of-hazards"
    },

    {
        id: "eggy-car",
        name: "Eggy Car",
        icon: "🥚",
        category: "Arcade",
        description: "Keep the egg balanced.",
        url: "https://www.crazygames.com/game/eggy-car"
    },

    {
        id: "gold-miner",
        name: "Gold Miner",
        icon: "⛏️",
        category: "Arcade",
        description: "Grab gold and reach the target.",
        url: "https://www.crazygames.com/game/gold-miner"
    },

    {
        id: "tiny-fishing",
        name: "Tiny Fishing",
        icon: "🎣",
        category: "Arcade",
        description: "Fish deeper and upgrade your gear.",
        url: "https://www.crazygames.com/game/tiny-fishing"
    },

    {
        id: "color-switch",
        name: "Color Switch",
        icon: "🌈",
        category: "Arcade",
        description: "Pass through matching colors.",
        url: "https://www.crazygames.com/game/color-switch"
    },

    {
        id: "tap-tap-shots",
        name: "Tap Tap Shots",
        icon: "🏀",
        category: "Arcade",
        description: "Score basketball shots with timing.",
        url: "https://www.crazygames.com/game/tap-tap-shots"
    },

    {
        id: "stack",
        name: "Stack",
        icon: "🟦",
        category: "Arcade",
        description: "Build the tallest tower.",
        url: "https://www.crazygames.com/game/stack"
    },

    {
        id: "knife-hit",
        name: "Knife Hit",
        icon: "🎯",
        category: "Arcade",
        description: "Hit targets with precise timing.",
        url: "https://www.crazygames.com/game/knife-hit"
    },


    /* ================= PUZZLE ================= */

    {
        id: "2048",
        name: "2048",
        icon: "🔢",
        category: "Puzzle",
        description: "Merge numbers to reach 2048.",
        url: "https://www.crazygames.com/game/2048"
    },

    {
        id: "bloxorz",
        name: "Bloxorz",
        icon: "🟧",
        category: "Puzzle",
        description: "Roll the block into the hole.",
        url: "https://www.crazygames.com/game/bloxorz"
    },

    {
        id: "cut-the-rope",
        name: "Cut the Rope",
        icon: "🍬",
        category: "Puzzle",
        description: "Solve physics puzzles for candy.",
        url: "https://www.crazygames.com/game/cut-the-rope"
    },

    {
        id: "sugar-sugar",
        name: "Sugar Sugar",
        icon: "🍭",
        category: "Puzzle",
        description: "Guide sugar into the cups.",
        url: "https://www.crazygames.com/game/sugar-sugar"
    },

    {
        id: "sudoku",
        name: "Sudoku",
        icon: "🔢",
        category: "Puzzle",
        description: "Classic number puzzle.",
        url: "https://www.crazygames.com/game/sudoku"
    },

    {
        id: "word-search",
        name: "Word Search",
        icon: "🔤",
        category: "Puzzle",
        description: "Find hidden words.",
        url: "https://www.crazygames.com/game/word-search"
    },

    {
        id: "worlds-hardest-game",
        name: "World's Hardest Game",
        icon: "😈",
        category: "Puzzle",
        description: "A brutally challenging classic.",
        url: "https://www.crazygames.com/game/worlds-hardest-game"
    },

    {
        id: "little-alchemy-2",
        name: "Little Alchemy 2",
        icon: "🧪",
        category: "Puzzle",
        description: "Combine elements to discover new ones.",
        url: "https://www.crazygames.com/game/little-alchemy-2"
    },

    {
        id: "block-the-pig",
        name: "Block the Pig",
        icon: "🐷",
        category: "Puzzle",
        description: "Trap the pig using clever blocks.",
        url: "https://www.crazygames.com/game/block-the-pig"
    },

    {
        id: "maze",
        name: "Maze",
        icon: "🌀",
        category: "Puzzle",
        description: "Find your way through tricky mazes.",
        url: "https://www.crazygames.com/game/maze"
    },


    /* ================= PLATFORM ================= */

    {
        id: "fireboy-watergirl",
        name: "Fireboy & Watergirl",
        icon: "🔥",
        category: "Platform",
        description: "Two-character puzzle adventure.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl"
    },

    {
        id: "fireboy-watergirl-2",
        name: "Fireboy & Watergirl 2",
        icon: "💧",
        category: "Platform",
        description: "Temple puzzle adventure.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl-2"
    },

    {
        id: "fireboy-watergirl-3",
        name: "Fireboy & Watergirl 3",
        icon: "🌲",
        category: "Platform",
        description: "Forest Temple adventure.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl-3"
    },

    {
        id: "fireboy-watergirl-4",
        name: "Fireboy & Watergirl 4",
        icon: "❄️",
        category: "Platform",
        description: "Crystal Temple puzzles.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl-4"
    },

    {
        id: "fireboy-watergirl-5",
        name: "Fireboy & Watergirl 5",
        icon: "🌌",
        category: "Platform",
        description: "Elements temple adventure.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl-5"
    },

    {
        id: "fireboy-watergirl-6",
        name: "Fireboy & Watergirl 6",
        icon: "✨",
        category: "Platform",
        description: "Fairy-tale temple puzzles.",
        url: "https://www.crazygames.com/game/fireboy-and-watergirl-6"
    },

    {
        id: "vex-3",
        name: "Vex 3",
        icon: "🤸",
        category: "Platform",
        description: "Precision platforming.",
        url: "https://www.crazygames.com/game/vex-3"
    },

    {
        id: "vex-4",
        name: "Vex 4",
        icon: "🤸",
        category: "Platform",
        description: "More traps and platforming.",
        url: "https://www.crazygames.com/game/vex-4"
    },

    {
        id: "vex-5",
        name: "Vex 5",
        icon: "🤸",
        category: "Platform",
        description: "Harder Vex challenges.",
        url: "https://www.crazygames.com/game/vex-5"
    },

    {
        id: "vex-6",
        name: "Vex 6",
        icon: "🤸",
        category: "Platform",
        description: "Fast platforming challenges.",
        url: "https://www.crazygames.com/game/vex-6"
    },

    {
        id: "vex-7",
        name: "Vex 7",
        icon: "🤸",
        category: "Platform",
        description: "New obstacle courses.",
        url: "https://www.crazygames.com/game/vex-7"
    },


    /* ================= IO ================= */

    {
        id: "paper-io-2",
        name: "Paper.io 2",
        icon: "📄",
        category: "IO",
        description: "Claim territory and survive.",
        url: "https://www.crazygames.com/game/paper-io-2"
    },

    {
        id: "hole-io",
        name: "Hole.io",
        icon: "⚫",
        category: "IO",
        description: "Grow your hole by eating objects.",
        url: "https://www.crazygames.com/game/hole-io"
    },

    {
        id: "aquapark-io",
        name: "Aquapark.io",
        icon: "💦",
        category: "IO",
        description: "Race down giant water slides.",
        url: "https://www.crazygames.com/game/aquapark-io"
    },

    {
        id: "worms-zone",
        name: "Worms Zone",
        icon: "🐍",
        category: "IO",
        description: "Grow your worm and collect food.",
        url: "https://www.crazygames.com/game/worms-zone-a-slithery-snake"
    },

    {
        id: "agar-io",
        name: "Agar.io",
        icon: "🟢",
        category: "IO",
        description: "Grow your cell and dominate.",
        url: "https://www.crazygames.com/game/agar-io"
    },

    {
        id: "slither-io",
        name: "Slither.io",
        icon: "🐍",
        category: "IO",
        description: "Classic snake multiplayer.",
        url: "https://www.crazygames.com/game/slither-io"
    },

    {
        id: "diep-io",
        name: "Diep.io",
        icon: "🔵",
        category: "IO",
        description: "Upgrade your tank and compete.",
        url: "https://www.crazygames.com/game/diep-io"
    },

    {
        id: "zombs-royale",
        name: "Zombs Royale",
        icon: "🧟",
        category: "IO",
        description: "Fast multiplayer survival game.",
        url: "https://www.crazygames.com/game/zombs-royale"
    },

    {
        id: "duckpark-io",
        name: "DuckPark.io",
        icon: "🦆",
        category: "IO",
        description: "Race ducks down crazy slides.",
        url: "https://www.crazygames.com/game/duckpark-io"
    },


    /* ================= SPORTS ================= */

    {
        id: "basket-random",
        name: "Basket Random",
        icon: "🏀",
        category: "Sports",
        description: "Chaotic one-button basketball.",
        url: "https://www.crazygames.com/game/basket-random"
    },

    {
        id: "soccer-random",
        name: "Soccer Random",
        icon: "⚽",
        category: "Sports",
        description: "Chaotic one-button soccer.",
        url: "https://www.crazygames.com/game/soccer-random"
    },

    {
        id: "basketball-stars",
        name: "Basketball Stars",
        icon: "🏀",
        category: "Sports",
        description: "Fast basketball matches.",
        url: "https://www.crazygames.com/game/basketball-stars"
    },

    {
        id: "football-legends",
        name: "Football Legends",
        icon: "⚽",
        category: "Sports",
        description: "Arcade football battles.",
        url: "https://www.crazygames.com/game/football-legends"
    },

    {
        id: "volley-random",
        name: "Volley Random",
        icon: "🏐",
        category: "Sports",
        description: "Randomized volleyball.",
        url: "https://www.crazygames.com/game/volley-random"
    },

    {
        id: "tennis-masters",
        name: "Tennis Masters",
        icon: "🎾",
        category: "Sports",
        description: "Arcade tennis matches.",
        url: "https://www.crazygames.com/game/tennis-masters"
    },

    {
        id: "table-tennis-world-tour",
        name: "Table Tennis World Tour",
        icon: "🏓",
        category: "Sports",
        description: "Table tennis tournament.",
        url: "https://www.crazygames.com/game/table-tennis-world-tour"
    },

    {
        id: "boxing-random",
        name: "Boxing Random",
        icon: "🥊",
        category: "Sports",
        description: "Chaotic sports duels.",
        url: "https://www.crazygames.com/game/boxing-random"
    },

    {
        id: "soccer-free-kick",
        name: "Soccer Free Kick",
        icon: "⚽",
        category: "Sports",
        description: "Score free kicks with precision.",
        url: "https://www.crazygames.com/game/soccer-free-kick"
    },

    {
        id: "penalty-shooters-2",
        name: "Penalty Shooters 2",
        icon: "🥅",
        category: "Sports",
        description: "Penalty shootout action.",
        url: "https://www.crazygames.com/game/penalty-shooters-2"
    },

    {
        id: "basketball-frvr",
        name: "Basketball FRVR",
        icon: "🏀",
        category: "Sports",
        description: "Simple and satisfying basketball.",
        url: "https://www.crazygames.com/game/basketball-frvr"
    },

    {
        id: "mini-golf-club",
        name: "Mini Golf Club",
        icon: "⛳",
        category: "Sports",
        description: "Play mini golf across fun courses.",
        url: "https://www.crazygames.com/game/mini-golf-club"
    },


    /* ================= CLASSIC ================= */

    {
        id: "pacman",
        name: "Pacman",
        icon: "👻",
        category: "Classic",
        description: "Eat dots and avoid ghosts.",
        url: "https://www.crazygames.com/game/pacman"
    },

    {
        id: "tetris",
        name: "Tetris",
        icon: "🧱",
        category: "Classic",
        description: "Stack falling blocks.",
        url: "https://www.crazygames.com/game/tetris"
    },

    {
        id: "minesweeper",
        name: "Minesweeper",
        icon: "💣",
        category: "Classic",
        description: "Clear the board with logic.",
        url: "https://www.crazygames.com/game/minesweeper"
    },

    {
        id: "chess",
        name: "Chess",
        icon: "♟️",
        category: "Classic",
        description: "Classic chess.",
        url: "https://www.crazygames.com/game/chess"
    },

    {
        id: "checkers",
        name: "Checkers Legend",
        icon: "🔴",
        category: "Classic",
        description: "Classic checkers battles.",
        url: "https://www.crazygames.com/game/checkers-legend"
    },

    {
        id: "backgammon",
        name: "Backgammon",
        icon: "🎲",
        category: "Classic",
        description: "Classic board strategy game.",
        url: "https://www.crazygames.com/game/backgammon"
    },

    {
        id: "solitaire",
        name: "Solitaire",
        icon: "🃏",
        category: "Classic",
        description: "Classic card solitaire.",
        url: "https://www.crazygames.com/game/solitaire"
    },

    {
        id: "mahjong",
        name: "Mahjong",
        icon: "🀄",
        category: "Classic",
        description: "Match tiles and clear the board.",
        url: "https://www.crazygames.com/game/mahjong"
    },

    {
        id: "connect-four",
        name: "Connect 4",
        icon: "🔴",
        category: "Classic",
        description: "Connect four pieces in a row.",
        url: "https://www.crazygames.com/game/connect-four"
    }

];


/* =========================================================
   STATE
========================================================= */

let favorites =
    JSON.parse(
        localStorage.getItem("ymc_favorites") || "[]"
    );

let recent =
    JSON.parse(
        localStorage.getItem("ymc_recent") || "[]"
    );

let currentCategory = "All";
let currentView = "all";
let searchText = "";
let currentSort = "featured";


/* =========================================================
   ELEMENTS
========================================================= */

const gamesGrid =
    document.getElementById("gamesGrid");

const categories =
    document.getElementById("categories");

const searchInput =
    document.getElementById("searchInput");

const sortSelect =
    document.getElementById("sortSelect");

const totalGames =
    document.getElementById("totalGames");

const visibleGames =
    document.getElementById("visibleGames");

const favoriteCount =
    document.getElementById("favoriteCount");

const recentCount =
    document.getElementById("recentCount");

const emptyState =
    document.getElementById("emptyState");

const sectionTitle =
    document.getElementById("sectionTitle");

const sectionSubtitle =
    document.getElementById("sectionSubtitle");


/* =========================================================
   SAVE
========================================================= */

function saveData() {

    localStorage.setItem(
        "ymc_favorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "ymc_recent",
        JSON.stringify(recent)
    );
}


/* =========================================================
   CATEGORIES
========================================================= */

function buildCategories() {

    const categoryList = [
        "All",
        ...new Set(
            games.map(game => game.category)
        )
    ];

    categories.innerHTML = "";

    categoryList.forEach(category => {

        const button =
            document.createElement("button");

        button.className =
            "category-chip" +
            (category === currentCategory
                ? " active"
                : "");

        button.textContent =
            category === "All"
                ? "🎮 All"
                : category;

        button.addEventListener(
            "click",
            () => {

                currentCategory = category;

                currentView = "all";

                document
                    .querySelectorAll(".view-chip")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                document
                    .querySelector('[data-view="all"]')
                    ?.classList.add("active");

                buildCategories();

                renderGames();
            }
        );

        categories.appendChild(button);

    });
}


/* =========================================================
   FILTER
========================================================= */

function getFilteredGames() {

    let result = [...games];

    if (currentView === "favorites") {

        result =
            result.filter(game =>
                favorites.includes(game.id)
            );
    }

    if (currentView === "recent") {

        result =
            recent
                .map(id =>
                    games.find(game =>
                        game.id === id
                    )
                )
                .filter(Boolean);
    }

    if (
        currentView !== "recent" &&
        currentCategory !== "All"
    ) {

        result =
            result.filter(game =>
                game.category === currentCategory
            );
    }

    if (searchText.trim()) {

        const query =
            searchText
                .trim()
                .toLowerCase();

        result =
            result.filter(game =>
                game.name
                    .toLowerCase()
                    .includes(query) ||

                game.category
                    .toLowerCase()
                    .includes(query) ||

                game.description
                    .toLowerCase()
                    .includes(query)
            );
    }


    /* SORT */

    if (currentSort === "az") {

        result.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }

    else if (currentSort === "za") {

        result.sort(
            (a, b) =>
                b.name.localeCompare(a.name)
        );

    }

    else if (currentSort === "random") {

        result.sort(
            () => Math.random() - 0.5
        );

    }

    return result;
}


/* =========================================================
   RENDER
========================================================= */

function renderGames() {

    const result =
        getFilteredGames();

    gamesGrid.innerHTML = "";

    totalGames.textContent =
        games.length;

    visibleGames.textContent =
        result.length;

    favoriteCount.textContent =
        favorites.length;

    recentCount.textContent =
        recent.length;


    if (currentView === "favorites") {

        sectionTitle.textContent =
            "Favorite Games";

        sectionSubtitle.textContent =
            "Your saved games.";

    }

    else if (currentView === "recent") {

        sectionTitle.textContent =
            "Recently Played";

        sectionSubtitle.textContent =
            "Games you played recently.";

    }

    else {

        sectionTitle.textContent =
            currentCategory === "All"
                ? "All Games"
                : currentCategory;

        sectionSubtitle.textContent =
            "Pick something and start playing.";
    }


    if (result.length === 0) {

        emptyState.classList.remove("hidden");

        return;
    }

    emptyState.classList.add("hidden");


    result.forEach(
        (game, index) => {

            const card =
                document.createElement("article");

            card.className =
                "game-card";

            card.style.animationDelay =
                `${Math.min(index * 0.025, 0.4)}s`;


            const isFavorite =
                favorites.includes(game.id);


            card.innerHTML = `

                <div class="game-top">

                    <div class="game-icon">
                        ${game.icon}
                    </div>

                    <button
                        class="favorite-btn ${
                            isFavorite ? "active" : ""
                        }"
                        title="Favorite"
                        data-id="${game.id}"
                    >
                        ${isFavorite ? "❤️" : "♡"}
                    </button>

                </div>


                <span class="game-category">
                    ${game.category}
                </span>


                <h3>
                    ${game.name}
                </h3>


                <p>
                    ${game.description}
                </p>


                <a
                    class="play-btn"
                    href="${game.url}"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-game="${game.id}"
                >
                    PLAY NOW →
                </a>

            `;


            gamesGrid.appendChild(card);

        }
    );


    attachCardEvents();
}


/* =========================================================
   CARD EVENTS
========================================================= */

function attachCardEvents() {

    document
        .querySelectorAll(".favorite-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    const id =
                        button.dataset.id;

                    toggleFavorite(id);
                }
            );

        });


    document
        .querySelectorAll(".play-btn")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    const id =
                        link.dataset.game;

                    addRecent(id);
                }
            );

        });
}


/* =========================================================
   FAVORITES
========================================================= */

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.unshift(id);
    }

    saveData();

    renderGames();
}


/* =========================================================
   RECENT
========================================================= */

function addRecent(id) {

    recent =
        recent.filter(
            item => item !== id
        );

    recent.unshift(id);

    recent =
        recent.slice(0, 20);

    saveData();
}


/* =========================================================
   VIEW BUTTONS
========================================================= */

document
    .querySelectorAll(".view-chip")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".view-chip")
                    .forEach(btn =>
                        btn.classList.remove("active")
                    );

                button.classList.add("active");

                currentView =
                    button.dataset.view;

                if (currentView !== "all") {

                    currentCategory = "All";

                    buildCategories();
                }

                renderGames();

            }
        );

    });


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    event => {

        searchText =
            event.target.value;

        renderGames();

    }
);


/* =========================================================
   SORT
========================================================= */

sortSelect.addEventListener(
    "change",
    event => {

        currentSort =
            event.target.value;

        renderGames();

    }
);


/* =========================================================
   RANDOM
========================================================= */

document
    .getElementById("randomBtn")
    .addEventListener(
        "click",
        () => {

            const available =
                getFilteredGames();

            if (!available.length) {

                alert("No games available!");

                return;
            }

            const game =
                available[
                    Math.floor(
                        Math.random() *
                        available.length
                    )
                ];

            addRecent(game.id);

            window.open(
                game.url,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );


/* =========================================================
   FAVORITES BUTTON
========================================================= */

document
    .getElementById("favoritesBtn")
    .addEventListener(
        "click",
        () => {

            currentView = "favorites";

            document
                .querySelectorAll(".view-chip")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            document
                .querySelector(
                    '[data-view="favorites"]'
                )
                ?.classList.add("active");

            renderGames();

            window.scrollTo({
                top:
                    document
                        .querySelector(".games-section")
                        .offsetTop - 80,

                behavior: "smooth"
            });

        }
    );


/* =========================================================
   RECENT BUTTON
========================================================= */

document
    .getElementById("recentBtn")
    .addEventListener(
        "click",
        () => {

            currentView = "recent";

            document
                .querySelectorAll(".view-chip")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            document
                .querySelector(
                    '[data-view="recent"]'
                )
                ?.classList.add("active");

            renderGames();

            window.scrollTo({
                top:
                    document
                        .querySelector(".games-section")
                        .offsetTop - 80,

                behavior: "smooth"
            });

        }
    );


/* =========================================================
   CLEAR SEARCH
========================================================= */

document
    .getElementById("clearSearchBtn")
    .addEventListener(
        "click",
        () => {

            searchInput.value = "";

            searchText = "";

            currentCategory = "All";

            currentView = "all";

            document
                .querySelectorAll(".view-chip")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            document
                .querySelector(
                    '[data-view="all"]'
                )
                ?.classList.add("active");

            buildCategories();

            renderGames();
        }
    );


/* =========================================================
   THEME
========================================================= */

const themeBtn =
    document.getElementById("themeBtn");

let savedTheme =
    localStorage.getItem("ymc_theme");


function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark");

        themeBtn.textContent = "☀️";

    } else {

        document.body.classList.remove("dark");

        themeBtn.textContent = "🌙";
    }
}


applyTheme(
    savedTheme || "light"
);


themeBtn.addEventListener(
    "click",
    () => {

        const dark =
            document.body.classList.toggle("dark");

        const theme =
            dark ? "dark" : "light";

        localStorage.setItem(
            "ymc_theme",
            theme
        );

        applyTheme(theme);

    }
);


/* =========================================================
   CLOCK
========================================================= */

function updateClock() {

    const now =
        new Date();

    let hours =
        now.getHours();

    const minutes =
        String(
            now.getMinutes()
        ).padStart(2, "0");

    const seconds =
        String(
            now.getSeconds()
        ).padStart(2, "0");

    const period =
        hours >= 12
            ? "PM"
            : "AM";

    hours =
        hours % 12 || 12;

    hours =
        String(hours)
            .padStart(2, "0");

    document
        .getElementById("clock")
        .textContent =
            `${hours}:${minutes}:${seconds} ${period}`;
}


updateClock();

setInterval(
    updateClock,
    1000
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        const tag =
            document.activeElement?.tagName;

        const typing =
            tag === "INPUT" ||
            tag === "TEXTAREA";


        if (
            event.key === "/" &&
            !typing
        ) {

            event.preventDefault();

            searchInput.focus();

        }


        if (
            event.key.toLowerCase() === "r" &&
            !typing
        ) {

            document
                .getElementById("randomBtn")
                .click();

        }


        if (
            event.key.toLowerCase() === "f" &&
            !typing
        ) {

            document
                .getElementById("favoritesBtn")
                .click();

        }

    }
);


/* =========================================================
   START
========================================================= */

buildCategories();

renderGames();
