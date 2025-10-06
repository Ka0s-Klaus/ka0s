sudo apt-get update
sudo apt-get install -y mariadb-server libapache2-mod-php php php-mysql php-cli php-json graphviz php-xml php-gd php-zip php-curl php-soap php-mbstring php-apcu php-ldap php-imap
 
wget https://sourceforge.net/projects/itop/files/latest/download -O /tmp/itop.zip
sudo unzip /tmp/itop.zip "web/*" -d /var/www/html/itop
sudo mv /var/www/html/itop/web/*  /var/www/html/itop

sudo rm -rf /var/www/html/itop/web
sudo setfacl -dR -m u:"www-data":rwX /var/www/html/itop/data /var/www/html/itop/log
sudo setfacl -R -m u:"www-data":rwX /var/www/html/itop/data /var/www/html/itop/log
sudo setfacl -m u:"www-data":rwX /var/www/html/itop/
sudo mkdir /var/www/html/itop/env-production /var/www/html/itop/env-production-build /var/www/html/itop/env-test /var/www/html/itop/env-test-build
sudo chown www-data: /var/www/html/itop/conf /var/www/html/itop/env-production /var/www/html/itop/env-production-build /var/www/html/itop/env-test /var/www/html/itop/env-test-build

sudo service mariadb start
echo "No te olvides de crear el usuario admin....... (sudo mariadb && CREATE USER admin@'%' IDENTIFIED BY 'password' && quit;)"
echo "No te olvides de asignarle los permisos ...... (GRANT USAGE ON *.* TO 'admin'@'%' IDENTIFIED BY 'password' && GRANT ALL PRIVILEGES ON kaositsm.* TO 'admin'@'%' && FLUSH PRIVILEGES && quit;)"
sudo service mariadb restart
sudo service apache2 start
sudo netstat -ano
sudo service --status-all