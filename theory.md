# Part 2 - Theory

## How the Pokémon API could be expanded in to a backend API

The pokémon API could be expanded in to a microservice backend API by following the REST API paradigm. This would mean that the current variations functionality could sit under the `/variations` url path, other paths would then allow for future expansion.

The folder structure within the `src` folder gives the API basic code organisation which can be expanded upon.

Express.js would be an ideal server framework to use for a microservice API as it is free, open-source, minimalist and being widely used it is reliable.

We could also use TypeScript within the project to add improved type safety and bug detection.

## Testing Considerations

When designing the microservice we need to consider the ability to test it, the structure of the application should allow us to easily test it either in units or as a whole.

Types of tests we should consider include functional testing such as:

* Unit Testing
* Integration Testing

But also non-functional testing such as:

* Performance Testing
* Load/Stress Testing
* Security Testing

## Versioning & Management

The API would be managed through a git repository. New features would be merged in to periodic releases. The API would use semantic versioning where a version number consists of major, minor and patch. A continuous integration tool could be used to automate testing on new feature branches.

## Deployments & Releases

Releases could be linked to git version tags, this would give us the ability to automatically deploy new versions to a cloud service provider once a new version tag is published.
