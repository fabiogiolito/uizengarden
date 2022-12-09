<script>
  import Highlight from "$lib/Highlight.svelte";

  import ScrollArea from "$lib/ScrollArea.svelte";
</script>


<h2>Scroll area</h2>

<hr />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <ScrollArea style="height: 200px;">
      <p>Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel. Suspendisse accumsan sagittis leo. Quisque sed fermentum sapien, ac euismod ante. Quisque mattis purus a ligula vestibulum, at faucibus felis aliquam. Maecenas vel rhoncus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at faucibus magna. Curabitur quis leo ac nisl pretium vehicula et in mi. Nullam feugiat lacus ut ipsum pharetra, quis mollis neque interdum. Mauris maximus malesuada ipsum, vitae congue nibh porta non. Sed porta turpis eget odio porttitor, lobortis fermentum ante consectetur. In hac habitasse platea dictumst. Morbi quis fringilla nibh. Curabitur interdum ac leo sed tristique.</p>
      <p>Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel. Suspendisse accumsan sagittis leo. Quisque sed fermentum sapien, ac euismod ante. Quisque mattis purus a ligula vestibulum, at faucibus felis aliquam. Maecenas vel rhoncus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at faucibus magna. Curabitur quis leo ac nisl pretium vehicula et in mi. Nullam feugiat lacus ut ipsum pharetra, quis mollis neque interdum. Mauris maximus malesuada ipsum, vitae congue nibh porta non. Sed porta turpis eget odio porttitor, lobortis fermentum ante consectetur. In hac habitasse platea dictumst. Morbi quis fringilla nibh. Curabitur interdum ac leo sed tristique.</p>
    </ScrollArea>
  </div>
</div>
<Highlight code={`
  <ScrollArea style="height: 200px;">
    <p>Curabitur suscipit lectus lorem...</p>
    <p>Curabitur suscipit lectus lorem...</p>
  </ScrollArea>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <ScrollArea overlap style="height: 200px;">
      <p>Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel. Suspendisse accumsan sagittis leo. Quisque sed fermentum sapien, ac euismod ante. Quisque mattis purus a ligula vestibulum, at faucibus felis aliquam. Maecenas vel rhoncus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at faucibus magna. Curabitur quis leo ac nisl pretium vehicula et in mi. Nullam feugiat lacus ut ipsum pharetra, quis mollis neque interdum. Mauris maximus malesuada ipsum, vitae congue nibh porta non. Sed porta turpis eget odio porttitor, lobortis fermentum ante consectetur. In hac habitasse platea dictumst. Morbi quis fringilla nibh. Curabitur interdum ac leo sed tristique.</p>
      <p>Curabitur suscipit lectus lorem, convallis convallis est blandit quis. Nunc sagittis at leo eu faucibus. Maecenas rutrum lorem eros, ut sollicitudin urna blandit vel. Suspendisse accumsan sagittis leo. Quisque sed fermentum sapien, ac euismod ante. Quisque mattis purus a ligula vestibulum, at faucibus felis aliquam. Maecenas vel rhoncus augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc at faucibus magna. Curabitur quis leo ac nisl pretium vehicula et in mi. Nullam feugiat lacus ut ipsum pharetra, quis mollis neque interdum. Mauris maximus malesuada ipsum, vitae congue nibh porta non. Sed porta turpis eget odio porttitor, lobortis fermentum ante consectetur. In hac habitasse platea dictumst. Morbi quis fringilla nibh. Curabitur interdum ac leo sed tristique.</p>
    </ScrollArea>
  </div>
</div>
<Highlight code={`
  <ScrollArea overlap style="height: 200px;">
    <p>Curabitur suscipit lectus lorem...</p>
    <p>Curabitur suscipit lectus lorem...</p>
  </ScrollArea>
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <ScrollArea style="height: 200px;">
      <p>Curabitur suscipit lectus lorem.</p>
    </ScrollArea>
  </div>
</div>
<Highlight code={`
  <ScrollArea style="height: 200px;">
    <p>Curabitur suscipit lectus lorem.</p>
  </ScrollArea>
`} />
