export function parseKeywords(inputString, keywords) {
    if (!inputString || !Array.isArray(keywords)) {
        return "Invalid input.";
    }

    // Define a mapping of correct keywords to their misspellings
    const keywordMap = {
        news: [
            "neews", "newes", "neus", "newz", "noews", "nwes", "new", 
            "vanguard", "vngaurd", "vauguard", "vangard", "vangaurd", "vanguar", "vauguard", 
            "vaugnard", "vagard", "vander", "vagurad", "vangaurd", "vagurad", 
            "vanguard journalism", "vanguard jornalisim", "vanguad journalism", "vanguard jorunalism", 
            "vanguard jornalism", "vanguarde journalism", "vanguar journalism", "vanguard jourlism", 
            "vanguard journlism", "vanguad jurnlism", "vanguard jornlism", "vanguard jounalism", 
            "vanguard jouralism", "vanguard journalism", "vanguard jurnalism", "vngaurd journalism", 
            "vanguard journelism", "vanguard jorunalism", "vanguar journalizm", "vanguard jouranalism", 
            "vanguard jurnlism", "vanguar jornalism", "vanguard journlizm", "vagurad journalism", 
            "vagard journalism", "vanguard journamism", "vanguard journlism", "vanguard journisism", 
            "vanguard jurnalism", "journlism", "jornlism", "journamism", "jurnalism", "jornalism", 
            "jorunalism", "jorunlism", "jouralism", "jourlism", "jouranalism", "journolism", 
            "jurnlism", "jurnalisim", "journlizm", "journism", "journlism", "journim", "jurnalm", 
            "jorumalisim", "jurnolism", "jorunalisim", "journalism", 'interview', 'interview', 'interveiw', 'intervies', 'intervies', 'intervies', 'press', 'press', 'pres', 'prees'
        ],    
        stock: [
            "stock", "market", "stoks", "stoc", "stoks", "stoks", "stoks", "stokc", "stocck", "finiatlials", "finantials",
            "finantial", "finantial", "finantail", "finatials", "finatials", "finatials", "finatials", 'money', 'market', 'marcet', 'maret', 'marcet', 'marcet', 'markit', 'earnings', 'report', 'growth', 'earnings', 'trends', 'trends', 'trend'],   
        genesis: ["genesis, genisis", "geneses", "gennesis", "genessis", "jennesis", "genisus"],
        reddit: [
            "redkt", "redkt", "redkt", "redkt", "redkt", "redkt", "redkt",
            "redit", "reddt", "reddti", "reditt", "rddit", "reddi", "rddt",
            "blog", "blog", "bloog", "blg", "bllog", "bllg", "blgg", "blg",
            "blgo", "blgog", "blgog", "blgog", "blgog", "blgog", "blgog",
            "tech", "form", "from", "frum", "frm", "fro", "frmo", "forum", "fomr"
        ],
        
        company: ["comapny", "compnay", "compnay", "comapnies", "comapnies", "comapnies", "comapnies"],
        other: ['games', 'game'],
        articles: ["articals", "articels", "articls", "artciles", "articlse", "aricles", "article"]
    };

    // Normalize the input string
    const normalizedInput = inputString.toLowerCase();

    // Find matches for keywords and their misspellings
    const foundKeywords = Object.keys(keywordMap).filter(correctKeyword => {
        const allVariants = [correctKeyword, ...keywordMap[correctKeyword]];
        console.log('parseKeywords ',allVariants);
        return allVariants.some(variant => normalizedInput.includes(variant.toLowerCase()));
    });

    console.log(foundKeywords);

    if (foundKeywords.length > 0) {
        return `Found keywords: ${foundKeywords.join(', ')}`;
    } else {
        return "No keywords found.";
    }
}

// Example usage
const input = "This is a sample string to test keyword parsing with genisis and articels.";
const keywords = ["news", "genesis", "articles"];
console.log(parseKeywords(input, keywords));
