const fs = require('fs');
const os = require("os");

// most @actions toolkit packages have async methods
async function run()
{
    try
    {
        aip = process.env.AI_PATH;

        if (!fs.existsSync(aip))
            throw new Error("AssemblyInfo file not found");

        console.log(`AssemblyInfo Path: ${aip}`)

        rgx = new RegExp("\[assembly: AssemblyVersion\(\"(.*)\"\)\]", "m")

        ver = this.rgx.exec(fs.readFileSync(aip, { encoding: "utf-8" }))[1];

        if (!ver)
            throw new Error("Failed to get Assembly Version");

        console.log(`Assembly Version: ${ver}`)

        process.stdout.write(`::set-output name=ASSEMBLY_VERSION::${ver}` + os.EOL)

    }
    catch (error)
    {
        core.setFailed(error.message);
    }
}

run();
