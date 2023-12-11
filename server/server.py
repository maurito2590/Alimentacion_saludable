from flask import Flask, request, jsonify
from flask_cors import CORS
import mercadopago

app = Flask(__name__)
CORS(app)

productos_dict = {}  # Diccionario para rastrear cantidades de productos
sdk = mercadopago.SDK("TEST-1065602451630464-113019-fdea311b07b4364aa7d28e14b003a1d1-200244363")

@app.route('/procesar_compra', methods=['POST'])
def procesar_compra():
    data = request.json

    # Actualiza el diccionario de productos
    for producto in data['productos']:
        nombre = producto['nombre']
        precio = producto['precioUnitario']
        if nombre in productos_dict:
            productos_dict[nombre]['cantidad'] += 1
        else:
            productos_dict[nombre] = {'nombre': nombre, 'precio': precio, 'cantidad': 1}

    # Convierte el diccionario a una lista
    productos_limpios = list(productos_dict.values())

    response_data = {
        'productos': productos_limpios,
        'cantidad_total': data['cantidad_total'],
        'precio_total': data['precio_total']
    }
    print(response_data)

    # Crea un ítem en la preferencia de Mercado Pago
    preference_data = {
        "items": [
            {
                "title": "Productos Comprados",
                "quantity": response_data['cantidad_total'],
                "unit_price": response_data['precio_total'],
            }
        ]
    }

    preference_response = sdk.preference().create(preference_data)
    preference = preference_response["response"]

    return jsonify({"mensaje": "Datos recibidos correctamente", "data": response_data, "preference_id": preference['id']})

if __name__ == '__main__':
    app.run(port=8001)
