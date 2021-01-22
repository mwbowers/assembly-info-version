const fs = require('fs');
const os = require("os");

function run()
{
    aip = process.env.AI_PATH || process.env.INPUT_AI_PATH;    
    if (!fs.existsSync(aip))
        throw new Error('AssemblyInfo file not found');

    console.log(`AssemblyInfo Path: ${aip}`)

    rgx = new RegExp('\\[assembly: AssemblyVersion\\(\\"(.*)\\"\\)\\]', 'm');
    ver = rgx.exec(fs.readFileSync(aip, { encoding: 'utf-8' }))[1];

    if (!ver)
        throw new Error('Failed to get Assembly Version');

    vp = process.env.VER_PLACES || process.env.INPUT_VER_PLACES;
    
    console.log(`process.env.VER_PLACES: ${process.env.VER_PLACES}`)
    console.log(`process.env.INPUT_VER_PLACES: ${process.env.INPUT_VER_PLACES}`)
    console.log(`vp: ${vp}`)
    
    if (vp < 0 || vp > 4)
        throw new Error('Invalid version places');
    
    if (vp > 0 && vp < 4){
        var verSplit = ver.split('.');
        verSplit = verSplit.slice(0, vp);
        ver = verSplit.join('.');
    }
    
    console.log(`Assembly Version: ${ver}`)

    process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)
}

run();
