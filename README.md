# assignment-1-35-jordanhan443-jacob-sahl

Our deployed app can be viewed at this link: https://our-checkout-app.herokuapp.com/

Ours is an open-source store where anyone can edit the inventory using the RESTful API [here](https://our-checkout-app.herokuapp.com/api/items/)

Items can be added to the cart using the plus buttons and removed from cart using the minus buttons. The cart total will automatically update. A secret discount can be applied by pressing a super secret discount button (in the bottom-left corner).

**Installation instructions for running on a local machine:**
* clone the repository
* install Python dependencies as listed in "requirements.txt"
* install node modules by running "npm install" (install node.js if it is not already installed)
* run "npm run build"
* run "python manage.py migrate"
* run "python manage.py collectstatic"
* run "python manage.py runserver"
