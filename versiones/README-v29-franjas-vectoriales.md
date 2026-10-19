# V29 · Franjas nítidas y contención horizontal

Se elimina el estiramiento del borde rasterizado de V28. El módulo `franjas-vector-v29.svg` define tanto la prolongación como el primer tramo recto sobre la ilustración, usando las mismas coordenadas nativas. Así se evitan el desenfoque y las diferencias de anchura. Los perfiles originales permanecen intactos; se sustituye solo el tramo recto superior.

La portada contiene el margen transparente en horizontal mediante `overflow-x:clip`, permitiendo la prolongación vertical. Se conserva la composición móvil de V27, el mapa, el pasaporte y los scripts de V28.
