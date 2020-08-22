# Password-Generator

I removed most of the starting code and re-wrote it as later it broke for some reason, when I re-wrote, it worked fine.

First I added variables for my character sets, password length, confirmation for each and a variable for the user's choices for characters.

I wanted to make a function that I had found that allowed you to generate the character sets from the UTF code but I was unable to get this to work.

I created a function "generatePassword" which first prompts the user for the number of characters they want in their password, between 8 & 128. Then it checks to verify the user had between 8 & 128 characters.

If so, then the user is asked to confirm against the four sets of characters which they want to use, they must select at least one or an if statement alerts the user that they must have more choices selected.

I then have a set of else if statements that check against the user selections and concatenates them. 

The password is then set as an empty array and I used a for loop to generate the length based on the 8-128 characters the user entered earlier, then add the password to the array using .join, then return the final result.

There is also a button with an event listener that runs the function "generatePassword" that then displays the password to the user.