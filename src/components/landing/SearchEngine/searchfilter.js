export function parseKeywords(inputString, keywords) {
    if (!inputString || !Array.isArray(keywords)) {
        return "Invalid input.";
    }

    // Define a mapping of correct keywords to their misspellings
    const keywordMap = {
        news: [
            "neews", "newes", "neus", "newz", "noews", "nwes", "new",
            "interview", "interveiw", "intervies", "press", "pres", "prees"
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
        articles: ["articals", "articels", "articls", "artciles", "articlse", "aricles", "article"],
        star: ["star", "starr", "lone", "lone", "starr", "outlet", "star", "starr", "star", "starr"],
        
        madrigal: [
            "madrigal", "italy", "madri", 'ital', "madgrigal", "madrigall", "madgrigall", "madrigel", "madrigel", "madrigel", "madgrigel", 
            "madrigel", "madgrigel", "madrigel", "madgrigel", "madrigel", "madgrigel", "madrigel", "madgrigel", 
            "madrigel", "madgrigel", "madrigel", "madgrigel", "madrigel", "madgrigel", "madrigel", "madgrigel", 
            "madrigel"
            ],
    
        vanguard: ['van', 'vangur', 'guard', 'vanguard', 'vanguad', 'vauguard', 'vangard', 'vanguard', 'vanguad', 'vauguard', 'vangard', 'vanguard', 'vanguad', 'vauguard', 'vangard']
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
//const input = "This is a sample string to test keyword parsing with genisis and articels.";
//const keywords = ["news", "genesis", "articles"];
//console.log(parseKeywords(input, keywords));
