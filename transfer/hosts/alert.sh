# 1. Bloqueo con UFW (solo permitir puerto 1712)
sudo ufw allow 1712/tcp
sudo ufw enable

# 2. Alertas de intrusos (fail2ban)
sudo apt install fail2ban
sudo tee /etc/fail2ban/jail.d/sshd_custom.conf <<EOF
[sshd]
enabled = true
port = 1712
maxretry = 3
bantime = 1h
EOF

# 3. Auditoría diaria con cron
echo "0 3 * * * /usr/bin/aide --check" | sudo crontab -