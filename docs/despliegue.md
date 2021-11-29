---
sidebar_position: 2
title: Despliegue
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Una vez se hayan realizado los cambios necesarios en la versión de desarrollo, se sugiere comprobar el comportamiento de la aplicación en producción de manera local antes de lanzar la actualización a los usuarios.

## Creación del bundle de producción

El bundle de producción te ayudará a comprobar que los cambios realizados funcionen de manera correcta en un entorno real.

```bash
yarn build
```

Este comando creará el archivo `.exe` en la raíz del proyecto, dentro de la carpeta *dist*.

## Lanzar actualización

Si en el entorno de producción la aplicación ha funcionado como se esperaba, lo siguiente es lanzar una nueva versión de la aplicación para que los usuarios reciban la actualización de manera automática.

La aplicación es empaquetada y distribuida por `electron-builder`, sin embargo debe cerciorarse de que cuenta con el archivo electron-builder.env **en la raíz de su proyecto**: 

<Tabs>
<TabItem value="electronbuilder" label="electron-builder.env">

```bash
GH_TOKEN="" // Personal Access Token del repositorio de GitHub
```

</TabItem>
</Tabs>

:::caution Cuidado
El valor de la variable **GH_TOKEN** debe coincidir con el token establecido en la configuración de las actualizaciones automáticas dentro del archivo `electron.js`.
:::

Si la configuración anterior está lista, ahora será necesario modificar el archivo `package.json` en su propiedad **version**, por ejemplo:

```diff
{
    "name": "biogenica-pdv",
-   "version": "1.0.0",
+   "version": "1.0.1",
    ...
}
```

:::note Nota
El **valor de la versión** a lanzar queda completamente a su criterio de acuerdo a los cambios realizados y su impacto en la aplicación.
:::

**Finalmente, para lanzar la actualización, ejecutar:**

```bash
yarn release
```

Este comando creará de manera automática un release dentro del repositorio de GitHub.