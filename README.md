![Test the action](https://github.com/jasondavis303/assembly-info-version/workflows/Test%20the%20action/badge.svg)

# Assembly Info Version
GitHub action to get the Assembly Version from the Properties/AssemblyInfo files of older Visual Studio projects

## Usage
Create new `.github/workflows/dostuff.yml` file:

```yml
name: Do stuff
on:
  push:
    branches:
      - master

jobs:
  DoStuff:
    name: Do Stuff
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Get version
        id: get_version
        uses: jasondavis303/assembly-info-version
        with:
          
          # Filepath of the AssemblyInfo, relative to root of repository
          AI_PATH: MyProject/Properties/AssemblyInfo.cs

      -name: Next Step
       run: echo "${{ steps.get_version.outputs.ASSEMBLY_VERSION }}"
```

## Inputs

Input | Description
--- | ---
AI_PATH | Filepath of the AssemblyInfo, relative to root of repository

## Outputs

Output | Description
--- | ---
ASSEMBLY_VERSION | AssemblyVersion in AssemblyInfo
