let keranjang = [];

function tambahKeKeranjang(nama, harga){
    let item = keranjang.find(i => i.nama === nama);

    if(item){
        item.qty++;
    } else {
        keranjang.push({nama, harga, qty:1});
    }

    updateKeranjang();
}



function tambah(i){
    keranjang[i].qty++;
    updateKeranjang();
}

function kurang(i){
    if(keranjang[i].qty > 1){
        keranjang[i].qty--;
    } else {
        keranjang.splice(i,1);
    }
    updateKeranjang();
}function updateKeranjang(){
    let list = document.getElementById("list-item-keranjang");
    let total = 0;
    list.innerHTML = "";

    keranjang.forEach((item,index)=>{
        total += item.harga * item.qty;

        list.innerHTML += `
        <div class="cart-item">
            <p class="nama">${item.nama}</p>

            <div class="qty">
                <button onclick="kurang(${index})">-</button>
                <span>${item.qty}</span>
                <button onclick="tambah(${index})">+</button>
            </div>

            <p class="harga">Rp ${item.harga * item.qty}</p>

            <button class="hapus" onclick="hapus(${index})">x</button>
        </div>
        `;
    });

    document.getElementById("total-harga").innerText = total;
    document.getElementById("notif-keranjang").innerText = keranjang.length;
}

function hapus(i){
    keranjang.splice(i,1);
    updateKeranjang();
}

function bukaKeranjang(){
    document.getElementById("modal-keranjang").style.display="flex";
}

function tutupKeranjang(){
    document.getElementById("modal-keranjang").style.display="none";
}

function checkoutWA(){
    let pesan = "🛍️ Pesanan:\n\n";
    let total = 0;

    keranjang.forEach(item=>{
        let subtotal = item.harga * item.qty;
        total += subtotal;

        pesan += `- ${item.nama} x${item.qty} = Rp ${subtotal}\n`;
    });

    pesan += `\n💰 Total: Rp ${total.toLocaleString('id-ID')}`;

    window.open(`https://wa.me/6285691198653?text=${encodeURIComponent(pesan)}`);
}

function beliSekarang(nama,harga){
    let pesan = `Saya mau beli ${nama}`;
    window.open(`https://wa.me/6285691198653?text=${encodeURIComponent(pesan)}`);
}

function scrollToHome(){
    window.scrollTo({top:0,behavior:'smooth'});
}

function scrollToKategori(id){
    document.getElementById(id).scrollIntoView({behavior:'smooth'});
}