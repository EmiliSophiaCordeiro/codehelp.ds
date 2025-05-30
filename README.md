import matplotlib.pyplot as plt
import matplotlib.animation as animation
import numpy as np

# Skills and levels
skills = ['JavaScript', 'React', 'SQL']
levels = [80, 70, 60]

fig, ax = plt.subplots(figsize=(6, 4))
bar_container = ax.bar(skills, [0, 0, 0], color=['#f0db4f', '#61dafb', '#e38c00'])
ax.set_ylim(0, 100)
ax.set_title('Minhas Skills Tecnológicas')
ax.set_ylabel('Nível (%)')
ax.grid(axis='y', linestyle='--', alpha=0.7)

def animate(frame):
    for bar, level in zip(bar_container, levels):
        height = level * frame / 100
        bar.set_height(height)
    return bar_container

ani = animation.FuncAnimation(fig, animate, frames=100, interval=20, blit=True)
ani.save('/mnt/data/skills_animated.gif', writer='pillow')
