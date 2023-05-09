# AWS EC2 instance setup

AMI - Amazon Linux 2

## **Backend**

### _Installation_

Install Python3

```bash
sudo yum install python3 pip3
```

Create Virtualenv

```bash
sudo pip3 install virtualenv
```

Install dependencies by removing versions in requirements.txt - numpy, ipython..

```bash
source venv/bin/activate

pip install -r requirements_new.txt
```

Verify if it is running

```bash
gunicorn --preload --workers 4 --threads 100 main:app --timeout 600
```

### _Deployment_

Install nginx

```bash
sudo amazon-linux-extras install nginx1 -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

Update the timeout blocks in server in nginx.conf

```bash
server {
    # ... here goes your proxy configuration

    # Avoid 504 HTTP Timeout Errors
    proxy_connect_timeout       605;
    proxy_send_timeout          605;
    proxy_read_timeout          605;
    send_timeout                605;
    keepalive_timeout           605;
}
```

- Create sites-enabled and sites-available directories

```bash
# Soft link both the directories

cd sites-enabled
sudo ln -s ../sites-available/foo.conf .
ls -l
```

- Create files with route names

```bash
# verify the configuration
sudo nginx -t

# reload nginx service
sudo nginx -s reload
```

Install certbot

```jsx
sudo wget -r --no-parent -A 'epel-release-*.rpm' https://dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/
sudo rpm -Uvh dl.fedoraproject.org/pub/epel/7/x86_64/Packages/e/epel-release-*.rpm
sudo yum-config-manager --enable epel*
sudo yum install -y certbot
sudo yum install -y python-certbot-nginx
```

Add a cron job to renew the certificate

```jsx
SLEEPTIME=$(awk 'BEGIN{srand(); print int(rand()*(3600+1))}'); echo "0 0,12 * * * root sleep $SLEEPTIME && certbot renew -q" | sudo tee -a /etc/crontab > /dev/null
```

Run using systemd process manager

1. Create a `mutual.service` file in `/etc/systemd/system`
2. Start the service

## **Frontend**

Install Nodejs v14

```bash
sudo yum update -y
sudo yum install -y gcc gcc-c++ make openssl-devel git
curl --silent --location https://rpm.nodesource.com/setup_14.x | sudo bash -
sudo yum install -y nodejs

```

Install Yarn

```bash
npm install --global yarn
```

Install process manager pm2

```bash
sudo npm install pm2@latest -g
```
