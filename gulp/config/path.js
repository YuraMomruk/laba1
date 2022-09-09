

const buildFolder =`./dist`;
const srcFolder =`./src`;


export const path ={
    build:{
        html:`${buildFolder}/`,
        css: `${buildFolder}/css/`,
        files: `${buildFolder}/files/`,
    },
    src:{
        scss: `${srcFolder}/scss/style.scss`,
        html:`${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch:{
        html:`${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        scss: `${srcFolder}/scss/**/*.scss`,
    },
    clean: buildFolder,
}