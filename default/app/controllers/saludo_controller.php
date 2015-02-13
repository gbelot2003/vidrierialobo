<?php 
class SaludoController extends AppController {
 
    public function hola($nombre) 
    {
    	$this->fecha = date("Y-m-d H:i");
		$this->nombre = $nombre;
    }
	public function adios() 
	{
	}
}