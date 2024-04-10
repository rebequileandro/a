export const dataPopUp = {
  deshacerPedido: {
    status: 300,
    data: {
      title: 'Tu pedido se esta generando',
      description: 'Te avisaremos cuando el pedido esté listo para retirar',//cambiar descripcion cuando el pago es en efectivo
      button: 'Deshacer orden'
    }
  },
  ningunDato: {
    status: 400,
    data: {
      title: 'falta indicar datos',
      description:
        'Necesitamos saber que metodo de pago quieres utilizar y la barra para retirar tu pedido',
      button: 'Aceptar'
    }
  },
  sinMetodo: {
    status: 400,
    data: {
      title: 'falta indicar método',
      description:
        'Indicanos el método que quieres utilizar antes de retirar tu pedido.',
      button: 'Seleccionar método'
    }
  },
  sinBarra: {
    status: 400,
    data: {
      title: 'falta indicar barra',
      description:
        'Indicanos por cuál barra quieres retirar tu pedido antes de pagar.',
      button: 'Seleccionar barra'
    }
  },
  sinStock: {
    status: 400,
    data: {
      title: 'Se agotó el stock',
      description:
        'No se pudo procesar la orden nro 0021 porque se agotó el producto.',
      button: 'Aceptar'
    }
  },
  sinSaldo: {
    status: 400,
    data: {
      title: 'no tienes saldo suficiente',
      description:
        'Selecciona otro metodo de pago, no se ha podido generar el pedido.',
      button: 'Aceptar'
    }
  },
  pedidoEntregado: {
    status: 200,
    data: {
      title: 'tu pedido fue entregado',
      subtitle: 'N° de pedido #4093',
      description:
        '¡Segui disfrutando con tus amigos! Recuerda que si vas a manejar no tomes.',
      button: 'Aceptar'
    }
  }
};
