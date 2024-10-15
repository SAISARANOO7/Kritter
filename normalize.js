function normalizeString(input) {
    let trimmed = input.trim();

    let cleaned = trimmed.replace(/[^a-zA-Z0-9\s]/g, "");
        
    let singleSpaced = cleaned.replace(/\s+/g, " ");

    let camelCase = singleSpaced
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
    

    return camelCase;
}

console.log(normalizeString(" Hello world@ This is a Test!. "));