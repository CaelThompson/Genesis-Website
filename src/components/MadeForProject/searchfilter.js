export function parseKeywords(inputString, keywords) {
    if (!inputString || !Array.isArray(keywords)) {
        return "Invalid input.";
    }

    // Define a mapping of correct keywords to their misspellings
    const keywordMap = {
        news: ["neews", "newes", "neus", "newz", "noews", "nwes", "new"],
        genesis: ["genisis", "geneses", "gennesis", "genessis", "jennesis", "genisus"],
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