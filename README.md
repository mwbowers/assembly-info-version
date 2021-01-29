![Test the action](https://github.com/mwbowers81/assembly-info-version/workflows/Test/badge.svg)

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
        uses: mwbowers81/assembly-info-version
        with:
          
          # Filepath of the AssemblyInfo, relative to root of repository
          AI_PATH: MyProject/Properties/AssemblyInfo.cs
          VER_PLACES: 3

      -name: Next Step
       run: echo "${{ steps.get_version.outputs.ASSEMBLY_VERSION }}"
```

## Inputs

Input | Description
--- | ---
AI_PATH | Filepath of the AssemblyInfo, relative to root of repository
VER_PLACES | Number of parts of the version number to return. 1.2.3.4

## Outputs

Output | Description
--- | ---
ASSEMBLY_VERSION | AssemblyVersion in AssemblyInfo
