export async function createAnalyser(ctx: AudioContext, source: MediaStreamAudioSourceNode) {
  if (ctx.audioWorklet && (globalThis as any).crossOriginIsolated) {
    try {
      await ctx.audioWorklet.addModule('processor.js');
      const node = new AudioWorkletNode(ctx, 'meter');
      source.connect(node);
      return node;
    } catch (e) {
      // fall back
    }
  }
  const analyser = ctx.createAnalyser();
  source.connect(analyser);
  return analyser;
}
