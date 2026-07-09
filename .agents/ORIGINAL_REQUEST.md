# Original User Request

## 2026-07-09T13:22:10Z

Desarrollar los componentes y la página completa para el nuevo curso "Derecho Médico y la Imagen Diagnóstica", integrándolo en la academia. Adicionalmente, crear una visualización de calendario en la página principal para mostrar los próximos cursos de la academia.

Working directory: c:\Users\delfo\Desktop\Cursos cyp\landing-page
Integrity mode: development

## Requirements

### R1. Página del Curso "Derecho Médico"
Crear `CourseDerecho.jsx` y todos sus componentes internos (Hero, Syllabus, Pricing, Mentor, etc.) siguiendo fielmente el diseño y estructura de los otros cursos de la academia. El curso se dicta el 18 de Julio de 3:00 PM a 5:00 PM, precio $230.000 COP, y el mentor es el Dr. John Freddy Prado.

### R2. Integración en el Catálogo y Enrutamiento
Agregar la tarjeta del curso de Derecho Médico en la cuadrícula de `AcademyHome.jsx` y registrar la ruta correspondiente en `App.jsx`.

### R3. Calendario Interactivo de Próximos Cursos
Diseñar e implementar un componente de calendario (grid mensual clásico interactivo) en `AcademyHome.jsx` que muestre visualmente las fechas de los cursos programados (Tomografía el 25 de Julio, Escaneo el 18 de Julio, Derecho el 18 de Julio).

## Acceptance Criteria

### Integración y Construcción
- [ ] La aplicación compila correctamente sin errores al ejecutar `npm run build`.
- [ ] La ruta del nuevo curso renderiza la información sin alterar la estructura general.

### Diseño del Calendario
- [ ] El calendario mensual renderiza correctamente en la página principal.
- [ ] Las fechas con cursos asignados tienen indicadores visuales claros.
