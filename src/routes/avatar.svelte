<script>
  import Highlight from "$lib/Highlight.svelte";

  import Avatar from "$lib/Avatar.svelte";

  import IconCheck from "$lib/icons/IconCheck.svelte";

</script>


<h2>Stepper</h2>

<hr />


<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Avatar initials="FG" />
    <Avatar image={undefined} placeholder="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
    <Avatar image="https://pbs.twimg.com/profile_images/1547348110216658950/I_8fmKjU_400x400.jpg" placeholder="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
    <Avatar icon={IconCheck} />
  </div>
</div>
<Highlight code={`
  <Avatar initials="FG" />
  <Avatar image={undefined} placeholder="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
  <Avatar image="https://pbs.twimg.com/profile_images/1547348110216658950/I_8fmKjU_400x400.jpg" placeholder="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60" />
  <Avatar icon={IconCheck} />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Avatar size="xs" initials="FG" />
    <Avatar size="sm" initials="FG" />
    <Avatar size="md" initials="FG" />
    <Avatar size="lg" initials="FG" />
    <Avatar size="xl" initials="FG" />
  </div>
</div>
<Highlight code={`
  <Avatar size="xs" initials="FG" />
  <Avatar size="sm" initials="FG" />
  <Avatar size="md" initials="FG" />
  <Avatar size="lg" initials="FG" />
  <Avatar size="xl" initials="FG" />
`} />

<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Avatar size="lg" initials="FG" class="avatar--gradient" />
    <Avatar size="lg" initials="FG" style="background: limegreen;" />
  </div>
</div>
<Highlight code={`
  <Avatar size="lg" initials="FG" class="avatar--gradient" />
  <Avatar size="lg" initials="FG" style="background: limegreen;" />
`} />


<div class="uizg-preview">
  <div class="uizg-preview__element">
    <Avatar size="lg" initials="FG" iconBadge={IconCheck} />
    <Avatar size="lg" initials="FG">
      <span slot="badge">B</span>
    </Avatar>
    <Avatar size="lg" initials="FG">
      <span style="position: absolute; top: 0; right: 0; width: 0.5em; height: 0.5em; background: limegreen; border-radius: 100%;" />
    </Avatar>
  </div>
</div>
<Highlight code={`
  <Avatar size="lg" initials="FG" iconBadge={IconCheck} />
  <Avatar size="lg" initials="FG">
    <span slot="badge">B</span>
  </Avatar>
  <Avatar size="lg" initials="FG">
    <span style="
      position: absolute; top: 0; right: 0;
      width: 0.5em; height: 0.5em;
      background: limegreen; border-radius: 100%;
    " />
  </Avatar>
`} />
