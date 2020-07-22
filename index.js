const core = require('@actions/core');
const fs = require('fs');

// most @actions toolkit packages have async methods
async function run()
{
    try
    {
        aip = core.getInput('AI_PATH', { required: true });

        if (!fs.existsSync(aip))
            throw new Error("AssemblyInfo file not found");

        core.info(`AssemblyInfo Path: ${aip}`)

        rgx = new RegExp("\[assembly: AssemblyVersion\(\"(.*)\"\)\]", "m")

        ver = this.rgx.exec(fs.readFileSync(aip, { encoding: "utf-8" }))[1];

        if (!ver)
            throw new Error("Failed to get Assembly Version");

        core.info(`Version: ${ver}`)

        core.setOutput('ASSEMBLY_VERSION', `${ver}`);
    }
    catch (error)
    {
        core.setFailed(error.message);
    }
}

run();
