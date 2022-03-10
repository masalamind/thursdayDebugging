# DEBUGGING

# 1. Look for error messages 
    - code editor: tools linter, syntax highlighting 
    - console / devtools console 
    - interpret error message roughly

**Tools:**
- Atom: atom-ternjs, csslint,
- VsCode: Linter, vscode-eslint, hex-ci.stylelint-plus, bracket pair colorizer, Code spell checker, 

# 2. Pausing on exceptions 
    - Check pause on exception and refresh browser
    - Dev tools > Sources > Pause_on_exception_icon
    - Notice error location & kind of error    

# 3. Printing  
    - working parts of the program: confirm that execution reached a point in the code
    - confirm the data in a line of code is as you would expect: before and after a manipulation
    
**Tools:** alert , console.log etc

# 4. When using new syntax: counter check against official syntax 
    - for typos, comma/semicolon/brackets/curly braces omission
    - correct spelling
    - correct arguments given and parameters set

**Hacks:** 
- check for the usual suspects: commas, parenthesis(), curly brackets{}, number of arguments etc.
- scan character by character, word by word, line by line from right to left, bottom up
- read code characters and words out loud in the previous bullet format
- count pairs to ensure they have partners 

    event.preventDefault

# 5. Create breakpoints similar to printing: line of code at a time 
    - chrome debugger keyword
    - insert  keyword near line of code you want to debug
    - var userInput = $("input."+blank).val();
    - test data in variables 
    - countercheck with original code