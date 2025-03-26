// Mapping of English transliterations to Amharic letters
const amharicMap = {
  // Case-sensitive mappings (uppercase keys)
  'He': 'ኀ', 'Hu': 'ኁ', 'Hi': 'ኂ', 'Ha': 'ኃ', 'Hee': 'ኄ', 'H': 'ኅ', 'Ho': 'ኆ',
  'Te': 'ጠ', 'Tu': 'ጡ', 'Ti': 'ጢ', 'Ta': 'ጣ', 'Tee': 'ጤ', 'T': 'ጥ', 'To': 'ጦ',
  
  // Case-insensitive mappings (lowercase keys)
'a': 'አ', 'ea': 'ኧ',
'A': 'አ', 'Au': 'ኡ', 'Ai': 'ኢ', 'Aa': 'ኣ', 'E': 'ኤ', 'e': 'እ', 'O': 'ኦ',

'xa': 'ዐ', 'xu': 'ዑ', 'xi': 'ዒ', 'xaa': 'ዓ', 'xee': 'ዔ', 'x': 'ዕ', 'xo': 'ዖ',
'bua': 'ቧ', 'dua': 'ዷ', 'qua': 'ቋ', 'tua': 'ቷ', 'mua': 'ሟ', 'nua': 'ኗ', 'gnua': 'ኟ', 'rua': 'ሯ', 'sua': 'ሷ', 'shua': 'ሿ', 
  'cua': 'ቿ', 'pua': 'ፗ', 'zua': 'ዟ', 'vua': 'ቯ', 'kua': 'ኳ', 'tsua': 'ጷ', 'gua': 'ጓ', 'lua': 'ሏ', 've': 'ቨ', 'vu': 'ቩ', 
  'vi': 'ቪ', 'va': 'ቫ', 'vee': 'ቬ', 'v': 'ቭ', 'vo': 'ቮ', 'pe': 'ፐ', 'pu': 'ፑ', 'pi': 'ፒ', 'pa': 'ፓ', 'pee': 'ፔ', 'p': 'ፕ', 
  'po': 'ፖ', 'jua': 'ጇ', 'hua': 'ኋ', 'zhe': 'ዠ', 'zhu': 'ዡ', 'zhi': 'ዢ', 'zha': 'ዣ', 'zhee': 'ዤ', 'zh': 'ዥ', 'zho': 'ዦ', 'zhua': 'ዧ',
  'ha': 'ሀ', 'hu': 'ሁ', 'hi': 'ሂ', 'he': 'ሄ', 'h': 'ህ', 'ho': 'ሆ',
  'le': 'ለ', 'lu': 'ሉ', 'li': 'ሊ', 'la': 'ላ', 'lee': 'ሌ', 'l': 'ል', 'lo': 'ሎ',
  'me': 'መ', 'mu': 'ሙ', 'mi': 'ሚ', 'ma': 'ማ', 'mee': 'ሜ', 'm': 'ም', 'mo': 'ሞ',
  're': 'ረ', 'ru': 'ሩ', 'ri': 'ሪ', 'ra': 'ራ', 'ree': 'ሬ', 'r': 'ር', 'ro': 'ሮ',
  'se': 'ሰ', 'su': 'ሱ', 'si': 'ሲ', 'sa': 'ሳ', 'see': 'ሴ', 's': 'ስ', 'so': 'ሶ',
  'she': 'ሸ', 'shu': 'ሹ', 'shi': 'ሺ', 'sha': 'ሻ', 'shee': 'ሼ', 'sh': 'ሽ', 'sho': 'ሾ',
  'qe': 'ቀ', 'qu': 'ቁ', 'qi': 'ቂ', 'qa': 'ቃ', 'qee': 'ቄ', 'q': 'ቅ', 'qo': 'ቆ',
  'be': 'በ', 'bu': 'ቡ', 'bi': 'ቢ', 'ba': 'ባ', 'bee': 'ቤ', 'b': 'ብ', 'bo': 'ቦ',
  'te': 'ተ', 'tu': 'ቱ', 'ti': 'ቲ', 'ta': 'ታ', 'tee': 'ቴ', 't': 'ት', 'to': 'ቶ',
  'che': 'ቸ', 'chu': 'ቹ', 'chi': 'ቺ', 'cha': 'ቻ', 'chee': 'ቼ', 'ch': 'ች', 'cho': 'ቾ',
  'ne': 'ነ', 'nu': 'ኑ', 'ni': 'ኒ', 'na': 'ና', 'nee': 'ኔ', 'n': 'ን', 'no': 'ኖ',
  'gne': 'ኘ', 'gnu': 'ኙ', 'gni': 'ኚ', 'gna': 'ኛ', 'gnee': 'ኜ', 'gn': 'ኝ', 'gno': 'ኞ',
  'ke': 'ከ', 'ku': 'ኩ', 'ki': 'ኪ', 'ka': 'ካ', 'kee': 'ኬ', 'k': 'ክ', 'ko': 'ኮ',
  'we': 'ወ', 'wu': 'ዉ', 'wi': 'ዊ', 'wa': 'ዋ', 'wee': 'ዌ', 'w': 'ው', 'wo': 'ዎ',
  'ze': 'ዘ', 'zu': 'ዙ', 'zi': 'ዚ', 'za': 'ዛ', 'zee': 'ዜ', 'z': 'ዝ', 'zo': 'ዞ',
  'ye': 'የ', 'yu': 'ዩ', 'yi': 'ዪ', 'ya': 'ያ', 'yee': 'ዬ', 'y': 'ይ', 'yo': 'ዮ',
  'de': 'ደ', 'du': 'ዱ', 'di': 'ዲ', 'da': 'ዳ', 'dee': 'ዴ', 'd': 'ድ', 'do': 'ዶ',
  'je': 'ጀ', 'ju': 'ጁ', 'ji': 'ጂ', 'ja': 'ጃ', 'jee': 'ጄ', 'j': 'ጅ', 'jo': 'ጆ',
  'ge': 'ገ', 'gu': 'ጉ', 'gi': 'ጊ', 'ga': 'ጋ', 'gee': 'ጌ', 'g': 'ግ', 'go': 'ጎ',
  'ce': 'ጨ', 'cu': 'ጩ', 'ci': 'ጪ', 'ca': 'ጫ', 'cee': 'ጬ', 'c': 'ጭ', 'co': 'ጮ',
  'tse': 'ፀ', 'tsu': 'ፁ', 'tsi': 'ፂ', 'tsa': 'ፃ', 'tsee': 'ፄ', 'ts': 'ፅ', 'tso': 'ፆ',
  'fe': 'ፈ', 'fu': 'ፉ', 'fi': 'ፊ', 'fa': 'ፋ', 'fee': 'ፌ', 'f': 'ፍ', 'fo': 'ፎ'
};

// DOM elements - UPDATE THIS SECTION
const input = document.getElementById('input');
const fileInput = document.getElementById('fileInput');
const fileBtn = document.getElementById('file-btn');
const suggestionsDiv = document.getElementById('suggestions');
const transliterationPreview = document.getElementById('transliteration-preview');
const floatCopyBtn = document.getElementById('float-copy-btn');
const floatSaveBtn = document.getElementById('float-save-btn'); // This is the critical line
const notesList = document.getElementById('notes-list');
const toast = document.getElementById('toast');
const themeSwitch = document.getElementById('theme-switch');

// State management
let savedWords = [];
let jsonWords = [];
let notes = [];
let editingNoteIndex = null;

// Theme handling
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeSwitch.checked = true;
  }
}

function toggleTheme() {
  if (themeSwitch.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

// Initialize data from localStorage
function initializeData() {
  const storedNotes = localStorage.getItem('notes');
  if (storedNotes) {
    notes = JSON.parse(storedNotes);
  }

  const storedSavedWords = localStorage.getItem('savedWords');
  if (storedSavedWords) {
    savedWords = JSON.parse(storedSavedWords);
  }

  const storedJsonWords = localStorage.getItem('jsonWords');
  if (storedJsonWords) {
    jsonWords = JSON.parse(storedJsonWords);
  }
  
  const savedInputText = localStorage.getItem('currentInputText');
  if (savedInputText) {
    input.value = savedInputText;
    transliterationPreview.textContent = convertToAmharic(savedInputText);
  }
}

// Function to convert English to Amharic with protected text support
function convertToAmharic(text) {
  // Split text into protected (*...*) and unprotected segments
  const segments = text.split(/(\*.*?\*)/);
  
  let result = '';
  
  segments.forEach((segment, index) => {
    if (segment.startsWith('*') && segment.endsWith('*')) {
      // Protected English text - remove delimiters and add as-is
      result += segment.slice(1, -1);
    } else {
      // Regular text - convert to Amharic
      let convertedSegment = segment;
      
      // Case-sensitive conversions first (longest matches first)
      const caseSensitiveKeys = Object.keys(amharicMap)
        .filter(key => key !== key.toLowerCase())
        .sort((a, b) => b.length - a.length);
      
      caseSensitiveKeys.forEach(key => {
        const regex = new RegExp(key, 'g');
        convertedSegment = convertedSegment.replace(regex, amharicMap[key]);
      });

      // Case-insensitive conversions
      const caseInsensitiveKeys = Object.keys(amharicMap)
        .filter(key => key === key.toLowerCase())
        .sort((a, b) => b.length - a.length);
      
      caseInsensitiveKeys.forEach(key => {
        const regex = new RegExp(key, 'gi');
        convertedSegment = convertedSegment.replace(regex, amharicMap[key]);
      });
      
      result += convertedSegment;
    }
  });
  
  return result;
}

// Function to handle long press on suggestions
function setupLongPressDetection(element, word, wordSource) {
  let longPressTimer;
  let isLongPress = false;
  const longPressDuration = 500;

  const startLongPress = function(e) {
    isLongPress = false;
    longPressTimer = setTimeout(function() {
      isLongPress = true;
      element.classList.add('delete-mode');
    }, longPressDuration);
  };

  const endLongPress = function(e) {
    clearTimeout(longPressTimer);
    
    if (isLongPress) {
      e.preventDefault();
      e.stopPropagation();
      
      if (confirm(`Delete the suggestion "${word}"?`)) {
        if (wordSource === 'savedWords') {
          const index = savedWords.indexOf(word);
          if (index > -1) {
            savedWords.splice(index, 1);
            localStorage.setItem('savedWords', JSON.stringify(savedWords));
            showToast(`Deleted suggestion: ${word}`, "success");
            showSuggestions(transliterationPreview.textContent);
          }
        } else if (wordSource === 'jsonWords') {
          const index = jsonWords.indexOf(word);
          if (index > -1) {
            jsonWords.splice(index, 1);
            localStorage.setItem('jsonWords', JSON.stringify(jsonWords));
            showToast(`Deleted suggestion: ${word}`, "success");
            showSuggestions(transliterationPreview.textContent);
          }
        }
      } else {
        element.classList.remove('delete-mode');
      }
    }
  };

  const cancelLongPress = function() {
    clearTimeout(longPressTimer);
  };

  element.addEventListener('mousedown', startLongPress);
  element.addEventListener('touchstart', startLongPress, { passive: true });
  element.addEventListener('mouseup', endLongPress);
  element.addEventListener('touchend', endLongPress);
  element.addEventListener('mouseleave', cancelLongPress);
  element.addEventListener('touchcancel', cancelLongPress);
  element.addEventListener('touchmove', cancelLongPress, { passive: true });
}

// Function to calculate similarity between two words
function calculateSimilarity(word1, word2) {
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();
  
  if (word1 === word2) return 1.0;
  
  if (word1.startsWith(word2) || word2.startsWith(word1)) {
    const longerLength = Math.max(word1.length, word2.length);
    const shorterLength = Math.min(word1.length, word2.length);
    return shorterLength / longerLength * 0.9;
  }
  
  const len1 = word1.length;
  const len2 = word2.length;
  const matrix = Array(len1 + 1).fill().map(() => Array(len2 + 1).fill(0));
  
  for (let i = 0; i <= len1; i++) matrix[i][0] = i;
  for (let j = 0; j <= len2; j++) matrix[0][j] = j;
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = word1[i - 1] === word2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  const maxLength = Math.max(len1, len2);
  if (maxLength === 0) return 1.0;
  
  const distance = matrix[len1][len2];
  return 1.0 - (distance / maxLength);
}

// Show word suggestions
function showSuggestions(amharicText) {
  suggestionsDiv.innerHTML = "";
  const lastWord = amharicText.trim().split(" ").pop();

  if (lastWord && lastWord.length > 0) {
    const allWords = [...new Set([...savedWords, ...jsonWords])];
    const exactMatches = allWords.filter(word => 
      word.toLowerCase().startsWith(lastWord.toLowerCase())
    );
    
    const similarityThreshold = 0.65;
    const similarMatches = [];
    
    if (exactMatches.length < 5) {
      allWords.forEach(word => {
        if (!exactMatches.includes(word)) {
          const similarity = calculateSimilarity(lastWord, word);
          if (similarity >= similarityThreshold) {
            similarMatches.push({ word, similarity });
          }
        }
      });
      
      similarMatches.sort((a, b) => b.similarity - a.similarity);
    }
    
    const combinedMatches = [
      ...exactMatches,
      ...similarMatches.map(match => match.word)
    ];
    
    const limitedSuggestions = combinedMatches.slice(0, 5);

    if (limitedSuggestions.length > 0) {
      suggestionsDiv.style.display = "block";
      limitedSuggestions.forEach(word => {
        const suggestionElement = document.createElement("div");
        suggestionElement.classList.add("suggestion");
        
        if (!exactMatches.includes(word)) {
          suggestionElement.classList.add("similar-suggestion");
        }
        
        suggestionElement.textContent = word;
        
        suggestionElement.onclick = function(e) {
          if (suggestionElement.classList.contains('delete-mode')) {
            suggestionElement.classList.remove('delete-mode');
            return;
          }
          
          const words = amharicText.trim().split(" ");
          words[words.length - 1] = word;
          const newAmharicText = words.join(" ") + " ";
          
          transliterationPreview.textContent = newAmharicText;
          
          const inputText = input.value;
          const inputWords = inputText.trim().split(" ");
          
          if (inputWords.length > 0) {
            inputWords[inputWords.length - 1] = word + " ";
          }
          
          input.value = inputWords.join(" ");
          input.selectionStart = input.selectionEnd = input.value.length;
          
          localStorage.setItem('currentInputText', input.value);
          localStorage.setItem('currentTransliterationText', newAmharicText);
          
          suggestionsDiv.style.display = "none";
          input.focus();
        };
        
        let wordSource = '';
        if (savedWords.includes(word)) {
          wordSource = 'savedWords';
        } else if (jsonWords.includes(word)) {
          wordSource = 'jsonWords';
        }
        
        setupLongPressDetection(suggestionElement, word, wordSource);
        suggestionsDiv.appendChild(suggestionElement);
      });
    } else {
      suggestionsDiv.style.display = "none";
    }
  } else {
    suggestionsDiv.style.display = "none";
  }
}

// Notes functionality
function displayNotes() {
  notesList.innerHTML = "";
  
  if (notes.length === 0) {
    notesList.innerHTML = `<div class="empty-notes">No notes yet. Start by typing and saving some notes!</div>`;
    return;
  }
  
  notes.forEach((note, index) => {
    if (editingNoteIndex === index) {
      displayNoteEditor(note, index);
    } else {
      displayNote(note, index);
    }
  });
}

function displayNote(note, index) {
  const noteElement = document.createElement("div");
  noteElement.className = "note";
  noteElement.innerHTML = `
    <div class="note-header">
      <div class="timestamp">${note.timestamp}</div>
      <div class="note-actions">
        <button class="action-btn edit-btn" title="Edit">✏️</button>
        <button class="action-btn delete-btn" title="Delete">🗑️</button>
      </div>
    </div>
    <div class="note-content">${note.content}</div>
  `;
  
  noteElement.querySelector('.edit-btn').addEventListener('click', () => {
    startEditing(index, note.content);
  });
  
  noteElement.querySelector('.delete-btn').addEventListener('click', () => {
    deleteNote(index);
  });
  
  notesList.appendChild(noteElement);
}

function displayNoteEditor(note, index) {
  const editorElement = document.createElement("div");
  editorElement.className = "note-editor";
  editorElement.innerHTML = `
    <textarea>${note.content}</textarea>
    <div class="editor-actions">
      <button class="btn secondary-btn cancel-btn">Cancel</button>
      <button class="btn primary-btn save-btn">Save</button>
    </div>
  `;
  
  editorElement.querySelector('.cancel-btn').addEventListener('click', cancelEditing);
  editorElement.querySelector('.save-btn').addEventListener('click', saveEditedNote);
  notesList.appendChild(editorElement);
}

function saveNote() {
  const text = input.value.trim();
  if (text === "") return;

  const amharicText = convertToAmharic(text);
  const timestamp = new Date().toLocaleString();

  notes.unshift({ content: amharicText, timestamp });
  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";
  transliterationPreview.textContent = "";
  displayNotes();
  showToast("Note saved successfully!", "success");
}

function deleteNote(index) {
  if (confirm("Are you sure you want to delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
    showToast("Note deleted", "success");
  }
}

function startEditing(index, content) {
  editingNoteIndex = index;
  displayNotes();
}

function saveEditedNote() {
  const editedContent = document.querySelector('.note-editor textarea').value.trim();
  
  if (editedContent === "") return;

  notes[editingNoteIndex].content = editedContent;
  notes[editingNoteIndex].timestamp = new Date().toLocaleString() + " (edited)";
  localStorage.setItem("notes", JSON.stringify(notes));

  cancelEditing();
  showToast("Note updated", "success");
}

function cancelEditing() {
  editingNoteIndex = null;
  displayNotes();
}

// Copy function
function copyTransliteratedText() {
  const text = transliterationPreview.textContent;
  
  if (!text.trim()) {
    showToast("Nothing to copy", "warning");
    return;
  }

  const tempInput = document.createElement("textarea");
  tempInput.value = text;
  document.body.appendChild(tempInput);
  tempInput.select();
  tempInput.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempInput);
  showToast("Text copied to clipboard!", "success");
}

// Toast notification
function showToast(message, type = "success") {
  toast.textContent = message;
  toast.className = "toast";
  toast.classList.add(type);
  toast.classList.add("show");
  
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// File handling
function handleFileUpload() {
  fileInput.click();
}

function processFile(file) {
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      try {
        const data = JSON.parse(e.target.result);
        if (data.words && Array.isArray(data.words)) {
          jsonWords = data.words;
          localStorage.setItem("jsonWords", JSON.stringify(jsonWords));
          showToast("JSON file uploaded successfully!", "success");
        } else {
          showToast("Invalid JSON format. Expected an object with a 'words' array.", "error");
        }
      } catch (error) {
        showToast("Error parsing JSON file: " + error.message, "error");
      }
    };
    reader.readAsText(file);
  }
}








// Input handling with asterisk auto-closing
input.addEventListener('input', (e) => {
  // Handle asterisk auto-closing
  if (e.inputType === 'insertText' && e.data === '*') {
    const cursorPos = input.selectionStart;
    const textBefore = input.value.substring(0, cursorPos);
    const textAfter = input.value.substring(cursorPos);
    
    // Check if we're not already inside a protected block
    const openAsterisksBefore = (textBefore.match(/\*/g) || []).length;
    const closeAsterisksBefore = (textBefore.match(/\*(.*?)\*/g) || []).length * 2;
    
    if (openAsterisksBefore > closeAsterisksBefore) {
      // We're already in a protected block, don't auto-close
      return;
    }
    
    // Insert closing asterisk and position cursor between them
    input.value = textBefore + '*' + textAfter;
    input.selectionStart = input.selectionEnd = cursorPos;
    
    // Prevent default handling since we're modifying the value
    e.preventDefault();
    return;
  }

  const text = input.value;
  const amharicText = convertToAmharic(text);
  
  // Add visual styling for protected text
  const previewHTML = amharicText.replace(/\*(.*?)\*/g, '<span class="protected-text">$1</span>');
  transliterationPreview.innerHTML = previewHTML;
  
  // Show suggestions only for non-protected text
  const lastSegment = text.split(/\*.*?\*/).pop();
  if (!lastSegment.includes('*')) {
    showSuggestions(amharicText);
  } else {
    suggestionsDiv.style.display = "none";
  }

  // Auto-add words to savedWords (excluding protected text)
  if (text.endsWith(" ")) {
    const wordsToAdd = amharicText
      .replace(/\*.*?\*/g, '') // Remove protected text
      .trim()
      .split(' ')
      .filter(word => word.length >= 2 && !savedWords.includes(word));
    
    if (wordsToAdd.length > 0) {
      savedWords.push(...wordsToAdd);
      localStorage.setItem('savedWords', JSON.stringify(savedWords));
    }
  }
  
  // Save current state
  localStorage.setItem('currentInputText', text);
  localStorage.setItem('currentTransliterationText', amharicText);
});








//Input handling with asterisk auto-closing
input.addEventListener('input', (e) => {
  // Handle asterisk auto-closing
  if (e.inputType === 'insertText' && e.data === '*') {
    const cursorPos = input.selectionStart;
    const textBefore = input.value.substring(0, cursorPos);
    const textAfter = input.value.substring(cursorPos);
    
    // Count all asterisks before cursor
    const allAsterisksBefore = (textBefore.match(/\*/g) || []).length;
    // Count complete pairs before cursor
    const completePairsBefore = (textBefore.match(/\*(.*?)\*/g) || []).length;
    
    // Auto-close if:
    // 1. This is the first asterisk in a new pair, or
    // 2. All previous asterisks are properly paired
    if (allAsterisksBefore % 2 === 1 && completePairsBefore * 2 === allAsterisksBefore - 1) {
      // Insert closing asterisk
      input.value = textBefore + '*' + textAfter;
      // Position cursor between the asterisks
      input.selectionStart = input.selectionEnd = cursorPos;
      e.preventDefault();
      return;
    }
  }

  const text = input.value;
  const amharicText = convertToAmharic(text);
  
  // Add visual styling for protected text const previewHTML = amharicText.replace(/\*(.*?)\*/g, '<span class="protected-text">$1</span>');
  transliterationPreview.innerHTML = previewHTML;
  
  // Show suggestions only for non-protected text
  const lastSegment = text.split(/\*.*?\*/).pop();
  if (!lastSegment.includes('*')) {
    showSuggestions(amharicText);
  } else {
    suggestionsDiv.style.display = "none";
  }

  // Auto-add words to savedWords (excluding protected text)
  if (text.endsWith(" ")) {
    const wordsToAdd = amharicText
      .replace(/\*.*?\*/g, '') // Remove protected text
      .trim()
      .split(' ')
      .filter(word => word.length >= 2 && !savedWords.includes(word));
    
    if (wordsToAdd.length > 0) {
      savedWords.push(...wordsToAdd);
      localStorage.setItem('savedWords', JSON.stringify(savedWords));
    }
  }
  
  // Save current state
  localStorage.setItem('currentInputText', text);
  localStorage.setItem('currentTransliterationText', amharicText);
});

// Handle backspace for asterisk pairs
input.addEventListener('keydown', (e) => {
  // Handle backspace for asterisk pairs
  if (e.key === 'Backspace') {
    const cursorPos = input.selectionStart;
    const text = input.value;
    
    // Check if we're at a position right after an opening asterisk
    if (cursorPos > 0 && text[cursorPos - 1] === '*' && 
        (cursorPos >= text.length || text[cursorPos] !== '*')) {
      // Check if the next character is a closing asterisk
      if (cursorPos < text.length && text[cursorPos] === '*') {
        // Delete both asterisks
        input.value = text.substring(0, cursorPos - 1) + text.substring(cursorPos + 1);
        input.selectionStart = input.selectionEnd = cursorPos - 1;
        e.preventDefault();
      }
    }
  }
});











// Event listeners - UPDATE THIS SECTION
document.addEventListener('DOMContentLoaded', function() {
  // Safety check
  if (!floatSaveBtn) {
    console.error("Save button not found! Creating one dynamically...");
    const btn = document.createElement('button');
    btn.id = 'float-save-btn';
    btn.className = 'float-btn float-btn-left';
    btn.innerHTML = '<span class="float-btn-icon">💾</span>';
    document.body.appendChild(btn);
    btn.addEventListener('click', saveNote);
  } else {
    floatSaveBtn.addEventListener('click', saveNote);
  }

  floatCopyBtn.addEventListener('click', copyTransliteratedText);
  fileBtn.addEventListener('click', handleFileUpload);
  fileInput.addEventListener('change', (e) => processFile(e.target.files[0]));
  themeSwitch.addEventListener('change', toggleTheme);

  // Initialize the app
  initTheme();
  initializeData();
  displayNotes();
});


