// autocomplete.js
export const items = ['option1', 'option2', 'option3', 'option4', 'option5'];

export function showSuggestions(query) {
    const autocompleteList = document.getElementById('autocompleteList');
    autocompleteList.innerHTML = '';
    if (query.length === 0) {
        return;
    }
    const suggestions = items.filter(item => item.toLowerCase().includes(query.toLowerCase()));
    suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.textContent = suggestion;
        item.onclick = () => {
            const searchInput = document.getElementById('searchInput');
            if (searchInput instanceof HTMLInputElement) {
                searchInput.value = suggestion;
            }
            autocompleteList.innerHTML = '';
        };
        autocompleteList.appendChild(item);
    });
}
