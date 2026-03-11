sudo apt update
sudo apt install linux-image-generic linux-headers-generic

sudo apt remove 'linux-image-*-realtime' 'linux-headers-*-realtime'

sudo update-grub

sudo reboot

sudo apt install nvidia-driver-535 nvidia-utils-535

