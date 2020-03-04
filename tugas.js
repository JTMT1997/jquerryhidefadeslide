var nilai =1;
$("#tambah").click(function() {
	$("#demo").append('<div id="demo' + nilai + '"><input id="input1" type="text" name="nama" placeholder="nama" > <input id="input2" type="text" name="alamat" placeholder="alamat" > <input id="input3" type="text" name="email" placeholder="email" > <input id="input4" type="text" name="no_hp" placeholdr="no hp" > <button type="">cek</button> <button>cek2</button> </div>')
	nilai++;
});
$("#hapus").click(function() {
	nilai = nilai-1;
	$('#demo'+nilai).remove()
	

});


