# START UP RPI
After installing RPI OS - (default install) - click 1,2,3 (easy process)

Open terminal i RPI and run this commands

## Step 1 how to server the static web page using nginx"

Install and run nginx
https://pimylifeup.com/raspberry-pi-nginx/

Change the default side in nginx
https://owlhowto.com/how-to-change-default-index-page-on-nginx/?utm_content=cmp-true

I have used to ssh into the RPI 5 - 

find IP on RPI -> Open terminal and type in cmd 

ifconfig - enter

`Check the IP - it should look something like this 192.168.87.25`

Open terminal on PC (MAC) - and use ssh to connect to IP of the RPI (look above for IP )

you can type in ssh riad@192.168.87.25 - enter password ()

You can now edit the files on the RPI remote. 

Look the description how to change - i have been using one tekst editor in RPI to make changes to the files.

`sudo nano index......`

`sudo nano about.html`

Check for results in your browser. 

http://192.168.87.25/index.nginx-debian.html

If teacher ask you why you use nginx - it recommended for RPI ! 

### Step 3 How to install project dynweb - developed with node.js and how to serve it using serve and npm

Use this https://pimylifeup.com/raspberry-pi-nodejs/

We are using node.js for this dynamic web page () - you got recommendation from your father. 

You have been using IntelliJ to build the project. THIS one. 

There is readme on everything - READ it. 

1. Install node
2. Install npm (sudo apt install npm)
3. npm install (while inside this project folder /home/riad/Downloads/dynweb-main - its project folder)
4. npm run build
5. npm install -g serve
6. server -s build

After this you should see the web on
http://192.168.87.25:3000/


