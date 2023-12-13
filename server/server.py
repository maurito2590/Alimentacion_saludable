from flask import Flask, request, jsonify
from flask_cors import CORS
import mercadopago

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

productos_dict = {}  # Diccionario para rastrear cantidades de productos
sdk = mercadopago.SDK("TEST-1065602451630464-113019-fdea311b07b4364aa7d28e14b003a1d1-200244363")

@app.route('/procesar_compra', methods=['POST', 'OPTIONS'])
def procesar_compra():
    if request.method == 'OPTIONS':
        response = jsonify(success=True)
        response.headers.add('Access-Control-Allow-Origin', 'https://maurito2590.github.io')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        return response

    data = request.json

    # Actualiza el diccionario de productos
    for producto in data.get('productos', []):
        nombre = producto.get('nombre')
        precio = producto.get('precioUnitario')
        if nombre:
            if nombre in productos_dict:
                productos_dict[nombre]['cantidad'] += 1
            else:
                productos_dict[nombre] = {'nombre': nombre, 'precio': precio, 'cantidad': 1}

    # Convierte el diccionario a una lista
    productos_limpios = list(productos_dict.values())

    response_data = {
        'productos': productos_limpios,
        'cantidad_total': data.get('cantidad_total', 0),
        'precio_total': data.get('precio_total', 0)
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
    preference = preference_response.get("response", {})

    return jsonify({
        "mensaje": "Datos recibidos correctamente",
        "data": response_data,
        "preference_id": preference.get('id')
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5001)
