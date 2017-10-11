# Funny projects
## Dna converter
**dna.js** - Some Javascript code to convert text into a dna sequence. It converts the text in the corresponding binary code encoded in utf-8, then substitutes the bits pairwise according to this schema: 00->A; 01->C; 10->G; 11->T. Splitting the bytes back was a pain so that's it for the moment.
**dna.py** - Convert text to a dna sequence and vice versa. In this case, because it uses the python encode/decode functions was easy to convert back to text. No previous experience in JS didn't help either.
**dna.html** - Page to convert some text in a dna sequence, uses the script dna.js
