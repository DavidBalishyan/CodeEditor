const LANGUAGE_VERSIONS = {
    javascript: "18.15.0",
    typescript: "5.0.3",
    python: "3.10.0",
    java: "15.0.2",
    csharp: "6.12.0",
    php: "8.2.3",
  };
  
  const CODE_SNIPPETS = {
    javascript: `console.log("Hello World!");`,
    typescript: `const text: string = "Hello World!";\nconsole.log(text);`,
    python: `print("Hello World!")`,
    java: `public class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World!");\n\t}\n}\n`,
    csharp:
      'using System;\n\nnamespace HelloWorld\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello World!");\n\t\t}\n\t}\n}\n',
    php: "<?php\n\n$text = 'Hello World!';\necho $text;\n",
  };
   
  export { LANGUAGE_VERSIONS, CODE_SNIPPETS };