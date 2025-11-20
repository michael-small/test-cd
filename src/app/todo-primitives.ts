// normalComputed = computed(() => this.plainSignal() + ' computed');

// normalLinkedSignal = linkedSignal(() => this.plainSignal() + ' linked');

// #id = signal('1');

// _resource = resource({
//   params: () => ({ id: this.#id() }),
//   loader: ({ params, abortSignal }) => {
//     // fetch cancels any outstanding HTTP requests when the given `AbortSignal`
//     // indicates that the request has been aborted.
//     return fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`, {
//       signal: abortSignal,
//     }).then((response) => response.json());
//   },
// });
