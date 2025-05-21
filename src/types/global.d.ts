declare module '*.svg' {
    import React from 'react';
    const content: React.FC<React.SVGProps<SVGSVGElement>>;
    export default content;
}
declare module '@reduxjs/toolkit' {
    export * from '@reduxjs/toolkit/dist/index';
}
