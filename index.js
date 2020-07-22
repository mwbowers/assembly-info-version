const fs = require('fs');
const os = require("os");

function run()
{
    aip = process.env.AI_PATH || process.env.INPUT_AI_PATH;
    console.log(`AI_PATH: ${aip}`);

    if (!fs.existsSync(aip))
        throw new Error('AssemblyInfo file not found');

    console.log(`AssemblyInfo Path: ${aip}`)

    const text = fs.readFileSync(aip, { encoding: 'utf-8' });
    console.log(`Text: \n${text}`);

    rgx = new RegExp('\\[assembly: AssemblyVersion\\(\\"(.*)\\"\\)\\]', 'm');
    ver = rgx.exec(text);

    console.log(`Ver: ${ver}`);


    if (!ver)
        throw new Error('Failed to get Assembly Version');

    console.log(`Assembly Version: ${ver}`)

    process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)

}

run();
