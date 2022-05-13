const fs = require('fs');
const { resolve } = require('path');
const { mainModule } = require('process');

function nameToUpperCase(str) {
  return (
    str
      // .toLowerCase()
      .replace(/( |^)[a-z]/g, (L) => L.toUpperCase())
  );
}

function getSvgFileList(svgPath) {
  return new Promise((resolve, reject) => {
    const svgList = [];
    fs.readdirSync(svgPath).forEach(function (filename) {
      if (filename.indexOf('.svg') !== -1) {
        const rawData = fs.readFileSync(`${svgPath}/${filename}`);

        const camelName = filename
          .replace(/\.svg/g, '')
          .replace(/icon/i, '')
          .replace(/\s/g, '')
          .split('-')
          .map((d) => nameToUpperCase(d))
          .join('');

        let rawText = rawData.toString('utf8');
        rawText = rawText.replace(/fill="(#.*|white)"/g, '');
        rawText = rawText.replace(/width=.*"\s/g, '');
        rawText = rawText.replace(/height=.*"\s/g, '');
        rawText = rawText.replace('<svg ', '<svg viewBox="0 0 16 16" ');

        svgList.push({
          camelName,
          filename,
          rawText,
        });
      }
    });
    resolve(svgList);
  });
}

const saveSvgFile = async (svgPath, filename, rawText) => {
  await fs.createWriteStream(resolve(svgPath, filename), 'utf8').write(rawText);
};

const main = async () => {
  const svgPath = resolve('./src/assets/ApiPost');
  const svgList = await getSvgFileList(svgPath);

  const tsFileText = [];
  for (let i = 0; i < svgList.length; i++) {
    await saveSvgFile('./icons', `${svgList[i].camelName}.svg`, svgList[i].rawText);
    tsFileText.push(
      `export { default as ${svgList[i].camelName} } from './${svgList[i].camelName}.svg';`
    );
  }

  const tsFile = fs.createWriteStream(resolve('./icons', 'index.ts'), 'utf8');
  tsFile.write(tsFileText.join('\n'));
};

main();
