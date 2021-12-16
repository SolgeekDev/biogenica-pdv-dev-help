---
sidebar_position: 1
title: Comenzar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**Biogenica - Punto de venta** es una aplicación de escritorio para Windows, desarrollada con `Electron` y `React` con el objetivo de trabajar dentro de Farmacias Biogenica. 

## Clonar el repositorio

Si ya cuenta con el repositorio listo para ejecutarlo, vaya al paso **[Iniciar la aplicación](#iniciar-la-aplicación)**.

```bash
git clone https://github.com/SolgeekDev/BiogenicaPDV.git
```

:::info Información
En caso de requerirlo, solicitar el **Personal Access Token** al encargado del proyecto para llevar a cabo la autenticación con GitHub.
:::

## Variables de entorno

Es necesario definir dos archivos **en la raíz del proyecto** para las variables de entorno, tanto para desarrollo como para producción:

<Tabs>
<TabItem value="development" label=".env.development">

```bash
REACT_APP_API_URL="" // Url de la API de desarrollo
REACT_APP_SOCKET_SECRET_KEY="" // Contraseña para la autenticación con los sockets del servidor
```

</TabItem>
<TabItem value="production" label=".env.production">

```bash
REACT_APP_API_URL="" // Url de la API de producción
REACT_APP_SOCKET_SECRET_KEY="" // Contraseña para la autenticación con los sockets del servidor
```

</TabItem>
</Tabs>

:::info Información
El valor de cada una de las variables de entorno debe ser proporcionado por el encargado del proyecto.
:::

## Instalación de dependencias

Toda la gestión de dependencias dentro de la aplicación está hecha con `yarn`.

```bash
yarn install
```

:::caution Cuidado
Se sugiere seguir usando **yarn** como el único gestor para instalar, eliminar, actualizar o parchar dependencias ya que, en caso contrario, puede haber problemas futuros a la hora de ejecutar o empaquetar la aplicación.
:::

## Iniciar la aplicación

```bash
yarn start
```

## Referencia de API

La [documentación de la API](https://documenter.getpostman.com/view/9457476/Tzeajm13) es administrada desde **Postman**.

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />