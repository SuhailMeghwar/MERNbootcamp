## ⭐ Understanding Package.json



<h12>
 Let's Understand the Package.json
 </h12>

<p>

The package.json file is the heart of any Node.js project. It is the place where we define the project's metadata, including its name, version, description, main entry point, dependencies, and more. It is also where we define the scripts that we can run using the npm run command.

</p>


> - In simple words, the package.json file saves all the information about the project and its dependencies. It also contains the scripts that we can run using the npm run command.
> - If you want to recreate the project on another machine, you can use the package.json file to install all the dependencies and run the project.


*********

<h12>
 Let's Make a Package.json
</h12>

1. Open the terminal and navigate to the project folder.
2. Run the following command to create a package.json file.
```bash
npm init
```
3. Now you will see a series of questions in the terminal. You can press the Enter key to accept the default value for each question. The default values are shown in square brackets.

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

package name: (hello-world)
version: (1.0.0)
description: Node.js Full Stack Tutorial
entry point: (index.js)
test command:
git repository:
keywords:
author: Abdul Rafay
license: (ISC)

Is this OK? (yes)
```

4. After answering all the questions, you will get a file named package.json in the project folder. The package.json file will look like this:

```json filename="package.json"

{
  "name": "hello-world",
  "version": "1.0.0",
  "description": "Node.js Project Initialization",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Abdul Rafay",
  "license": "ISC"
}
```

> - The name field is the name of the project.
> - The version field is the version of the project.
> - The description field is the description of the project.
> - The main field is the entry point of the project meaning the file that will be executed when we run the project.
> - The scripts field is an object that contains the scripts that we can run using the npm run command.
> - The author field is the name of the author of the project.
> - The license field is the license of the project.

*********

<h12> What is package-lock.json</h12>

<p>
The package-lock.json file is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.
</p>





> If you delete the node_modules folder and package-lock.json file , this will not affect your project because when you run the project npm will automatically install the dependencies.

> -⚡ But if you delete the package.json file then you will not be able to run the project because npm will not know which dependencies to install.


*********

<h12> How to Uninstall Dependencies</h12>

<p>
To uninstall a package, you can use the npm uninstall command. For example, to uninstall the colors package, you can run the following command:
```bash
npm uninstall colors
```
</p>

*********

<h12> How to Update Dependencies</h12>

<p>
To update a package, you can use the npm update command. For example, to update the colors package, you can run the following command:
```bash
npm update colors
```

</p>

*********

<h12> How to Install Specific Version of a Package</h12>

<p>

To install a specific version of a package, you can use the npm install command with the @ character followed by the version number. For example, to install the colors package version 1.3.3, you can run the following command:

```bash
npm install colors@1.3.3
```

</p>

*********